"use client";

import { useState, useCallback, useRef } from "react";

// ─── Verification sub-components ───────────────────────────────────

function FillBlank({ question, onAnswer }) {
  const [value, setValue] = useState("");
  const parts = question.split("___");

  return (
    <div>
      <div className="text-lg font-bold text-navy mb-4 leading-relaxed">
        {parts[0]}
        <span className="inline-block min-w-[120px] mx-1 border-b-2 border-terra align-bottom">
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && value.trim() && onAnswer(value.trim())}
            className="w-full bg-transparent text-terra font-bold text-center outline-none py-1"
            placeholder="..."
            autoFocus
          />
        </span>
        {parts[1]}
      </div>
      <button
        onClick={() => value.trim() && onAnswer(value.trim())}
        disabled={!value.trim()}
        className={`mt-4 font-semibold px-6 py-3 rounded-xl transition-all ${
          value.trim()
            ? "bg-terra hover:bg-terra-dark text-white"
            : "bg-subtle text-slate/60 cursor-not-allowed"
        }`}
      >
        Check
      </button>
    </div>
  );
}

function MCQVerify({ question, options, onAnswer }) {
  return (
    <div>
      <h3 className="text-lg font-bold text-navy mb-4 leading-relaxed">
        {question}
      </h3>
      <div className="space-y-2.5">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(index)}
            className="w-full text-left px-5 py-3.5 rounded-xl bg-card-alt border-2 border-transparent hover:border-terra/30 hover:bg-terra-light/50 transition-all flex items-center gap-3"
          >
            <span className="w-8 h-8 rounded-lg bg-subtle-dark flex items-center justify-center text-sm font-bold text-slate flex-shrink-0">
              {String.fromCharCode(65 + index)}
            </span>
            <span className="font-medium text-navy">{option}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function TrueFalseVerify({ question, onAnswer }) {
  return (
    <div>
      <h3 className="text-lg font-bold text-navy mb-6 leading-relaxed">
        {question}
      </h3>
      <div className="flex gap-3">
        <button
          onClick={() => onAnswer(true)}
          className="flex-1 py-4 rounded-xl bg-card-alt border-2 border-transparent hover:border-sage/40 hover:bg-sage-light/50 transition-all font-bold text-navy text-lg"
        >
          ✓ True
        </button>
        <button
          onClick={() => onAnswer(false)}
          className="flex-1 py-4 rounded-xl bg-card-alt border-2 border-transparent hover:border-terra/40 hover:bg-terra-light/50 transition-all font-bold text-navy text-lg"
        >
          ✗ False
        </button>
      </div>
    </div>
  );
}

// ─── Helper: check answers ───────────────────────────────────────

function checkAnswer(verifyItem, answer) {
  switch (verifyItem.type) {
    case "fill-blank": {
      const normalise = (s) => s.toLowerCase().trim().replace(/['']/g, "'");
      const acceptable = verifyItem.accept || [verifyItem.answer];
      return acceptable.some((a) => normalise(a) === normalise(answer));
    }
    case "mcq":
      return answer === verifyItem.correct;
    case "true-false":
      return answer === verifyItem.answer;
    default:
      return false;
  }
}

// ─── Helper: select verify question ──────────────────────────────

function selectVerify(granule, lastType) {
  const options = granule.verify;
  if (options.length === 1) return options[0];

  // Prefer a different type than last used
  const different = options.filter((v) => v.type !== lastType);
  const pool = different.length > 0 ? different : options;

  // Simple random from pool
  return pool[Math.floor(Math.random() * pool.length)];
}

// ─── Main Teach component ────────────────────────────────────────

export default function Teach({ teach }) {
  const [phase, setPhase] = useState("intro"); // intro | teach | verify | feedback | node-complete | complete
  const [currentNodeIdx, setCurrentNodeIdx] = useState(0);
  const [currentGranuleIdx, setCurrentGranuleIdx] = useState(0);
  const [completedGranules, setCompletedGranules] = useState(new Set());
  const [results, setResults] = useState([]); // { granuleId, passed }
  const [lastComponentType, setLastComponentType] = useState(null);
  const [currentVerify, setCurrentVerify] = useState(null);
  const [feedbackData, setFeedbackData] = useState(null); // { passed, explanation, correctAnswer }
  const contentRef = useRef(null);

  const nodes = teach.nodes;
  const currentNode = nodes[currentNodeIdx];
  const currentGranule = currentNode?.granules[currentGranuleIdx];

  // Total granules for progress
  const totalGranules = nodes.reduce((sum, n) => sum + n.granules.length, 0);
  const completedCount = completedGranules.size;
  const overallProgress = (completedCount / totalGranules) * 100;

  // Granules completed in current node
  const nodeGranulesDone = currentNode
    ? currentNode.granules.filter((g) => completedGranules.has(g.id)).length
    : 0;

  // ─── Handlers ─────────────────────────

  const handleStart = useCallback(() => {
    setPhase("teach");
  }, []);

  const handleReadyToVerify = useCallback(() => {
    const verify = selectVerify(currentGranule, lastComponentType);
    setCurrentVerify(verify);
    setLastComponentType(verify.type);
    setPhase("verify");
  }, [currentGranule, lastComponentType]);

  const handleAnswer = useCallback(
    (answer) => {
      const passed = checkAnswer(currentVerify, answer);

      // Build correct answer string for feedback
      let correctAnswer = "";
      if (currentVerify.type === "fill-blank") {
        correctAnswer = currentVerify.answer;
      } else if (currentVerify.type === "mcq") {
        correctAnswer = currentVerify.options[currentVerify.correct];
      } else if (currentVerify.type === "true-false") {
        correctAnswer = currentVerify.answer ? "True" : "False";
      }

      setFeedbackData({
        passed,
        explanation: currentVerify.explanation,
        correctAnswer,
      });

      if (passed) {
        setCompletedGranules((prev) => new Set([...prev, currentGranule.id]));
      }

      setResults((prev) => [
        ...prev,
        { granuleId: currentGranule.id, passed },
      ]);

      setPhase("feedback");
    },
    [currentVerify, currentGranule]
  );

  const handleContinue = useCallback(() => {
    const node = nodes[currentNodeIdx];
    const nextGranuleIdx = currentGranuleIdx + 1;

    if (nextGranuleIdx < node.granules.length) {
      // More granules in this node
      setCurrentGranuleIdx(nextGranuleIdx);
      setPhase("teach");
    } else {
      // Node complete
      setPhase("node-complete");
    }

    setCurrentVerify(null);
    setFeedbackData(null);
  }, [currentNodeIdx, currentGranuleIdx, nodes]);

  const handleNextNode = useCallback(() => {
    const nextNodeIdx = currentNodeIdx + 1;
    if (nextNodeIdx < nodes.length) {
      setCurrentNodeIdx(nextNodeIdx);
      setCurrentGranuleIdx(0);
      setPhase("teach");
    } else {
      setPhase("complete");
    }
  }, [currentNodeIdx, nodes.length]);

  const handleReset = useCallback(() => {
    setPhase("intro");
    setCurrentNodeIdx(0);
    setCurrentGranuleIdx(0);
    setCompletedGranules(new Set());
    setResults([]);
    setLastComponentType(null);
    setCurrentVerify(null);
    setFeedbackData(null);
  }, []);

  // ─── Render helpers ────────────────────

  const renderNodeProgress = () => {
    if (!currentNode) return null;
    return (
      <div className="mb-6">
        {/* Overall progress */}
        <div className="flex items-center gap-4 mb-4">
          <div className="flex-1 h-2 bg-subtle rounded-full overflow-hidden">
            <div
              className="h-full bg-terra rounded-full transition-all duration-500 ease-out"
              style={{ width: `${overallProgress}%` }}
            />
          </div>
          <span className="text-sm font-semibold text-slate whitespace-nowrap">
            {completedCount} / {totalGranules}
          </span>
        </div>

        {/* Node label */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-bold uppercase tracking-widest text-terra">
            Topic {currentNode.id} of {nodes.length}
          </span>
        </div>
        <h3 className="text-base font-bold text-navy mb-3">
          {currentNode.title}
        </h3>

        {/* Granule dots */}
        <div className="flex items-center gap-1.5">
          {currentNode.granules.map((g, i) => {
            const isDone = completedGranules.has(g.id);
            const isCurrent = i === currentGranuleIdx;
            return (
              <div
                key={g.id}
                className={`h-2 rounded-full transition-all duration-300 ${
                  isDone
                    ? "bg-sage w-6"
                    : isCurrent
                    ? "bg-terra w-6"
                    : "bg-subtle-dark w-2.5"
                }`}
              />
            );
          })}
        </div>
      </div>
    );
  };

  // ─── PHASE: intro ─────────────────────

  if (phase === "intro") {
    return (
      <div className="animate-fade-in">
        <div className="bg-card rounded-2xl shadow-card p-8 max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <div className="text-5xl mb-4">📖</div>
            <h2 className="text-2xl font-extrabold text-navy mb-2">
              Ready to learn?
            </h2>
            <p className="text-slate">
              This lesson will teach you the material step by step, checking your understanding as you go.
            </p>
          </div>

          {/* Node list */}
          <div className="space-y-3 mb-8">
            {nodes.map((node, i) => (
              <div
                key={node.id}
                className="flex items-start gap-3 p-4 bg-card-alt rounded-xl"
              >
                <span className="w-8 h-8 rounded-lg bg-terra/10 flex items-center justify-center text-sm font-bold text-terra flex-shrink-0">
                  {i + 1}
                </span>
                <div>
                  <div className="font-semibold text-navy text-sm">
                    {node.title}
                  </div>
                  <div className="text-xs text-slate mt-0.5">
                    {node.granules.length} concepts
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={handleStart}
              className="bg-terra hover:bg-terra-dark text-white font-bold px-8 py-3.5 rounded-xl transition-colors text-lg"
            >
              Begin Lesson →
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ─── PHASE: teach ─────────────────────

  if (phase === "teach") {
    return (
      <div className="animate-fade-in" ref={contentRef}>
        {renderNodeProgress()}

        <div className="bg-card rounded-2xl shadow-card p-8 mb-4">
          {/* Granule objective badge */}
          <div className="inline-block bg-steel-light text-steel text-xs font-bold px-3 py-1 rounded-lg mb-4">
            {currentGranule.objective}
          </div>

          {/* Teaching content */}
          <div className="text-navy text-base leading-relaxed mb-6 whitespace-pre-line">
            {currentGranule.teach.content}
          </div>

          {/* Ready button */}
          <button
            onClick={handleReadyToVerify}
            className="bg-btn hover:bg-btn-hover text-white font-semibold px-6 py-3 rounded-xl transition-colors flex items-center gap-2"
          >
            Check my understanding →
          </button>
        </div>
      </div>
    );
  }

  // ─── PHASE: verify ────────────────────

  if (phase === "verify") {
    return (
      <div className="animate-fade-in">
        {renderNodeProgress()}

        <div className="bg-card rounded-2xl shadow-card p-8">
          <div className="inline-block bg-sand-light text-sand text-xs font-bold px-3 py-1 rounded-lg mb-5">
            Quick check
          </div>

          {currentVerify.type === "fill-blank" && (
            <FillBlank
              question={currentVerify.question}
              onAnswer={handleAnswer}
            />
          )}

          {currentVerify.type === "mcq" && (
            <MCQVerify
              question={currentVerify.question}
              options={currentVerify.options}
              onAnswer={handleAnswer}
            />
          )}

          {currentVerify.type === "true-false" && (
            <TrueFalseVerify
              question={currentVerify.question}
              onAnswer={handleAnswer}
            />
          )}
        </div>
      </div>
    );
  }

  // ─── PHASE: feedback ──────────────────

  if (phase === "feedback") {
    const { passed, explanation, correctAnswer } = feedbackData;

    return (
      <div className="animate-fade-in">
        {renderNodeProgress()}

        <div className="bg-card rounded-2xl shadow-card p-8 mb-4">
          {/* Result banner */}
          <div
            className={`flex items-center gap-3 p-4 rounded-xl mb-5 ${
              passed ? "bg-sage-light" : "bg-terra-light"
            }`}
          >
            <span className="text-2xl">{passed ? "✓" : "✗"}</span>
            <div>
              <div
                className={`font-bold ${passed ? "text-sage" : "text-terra"}`}
              >
                {passed ? "Got it!" : "Not quite"}
              </div>
              {!passed && (
                <div className="text-sm text-navy/70 mt-0.5">
                  The answer is: <span className="font-bold text-navy">{correctAnswer}</span>
                </div>
              )}
            </div>
          </div>

          {/* Explanation */}
          <div className="p-4 bg-steel-light rounded-xl mb-6">
            <p className="text-sm text-steel font-medium leading-relaxed">
              <span className="font-bold">💡 </span>
              {explanation}
            </p>
          </div>

          {/* Continue */}
          <button
            onClick={handleContinue}
            className="bg-btn hover:bg-btn-hover text-white font-semibold px-6 py-3 rounded-xl transition-colors flex items-center gap-2"
          >
            Continue →
          </button>
        </div>
      </div>
    );
  }

  // ─── PHASE: node-complete ──────────────

  if (phase === "node-complete") {
    const node = nodes[currentNodeIdx];
    const nodeResults = results.filter((r) =>
      node.granules.some((g) => g.id === r.granuleId)
    );
    const passedFirst = nodeResults.filter((r) => r.passed).length;
    const total = node.granules.length;
    const isLast = currentNodeIdx >= nodes.length - 1;

    return (
      <div className="animate-fade-in">
        <div className="bg-card rounded-2xl shadow-card p-8 max-w-2xl mx-auto text-center">
          <div className="text-5xl mb-4">🎉</div>
          <h2 className="text-2xl font-extrabold text-navy mb-2">
            Topic Complete!
          </h2>
          <p className="text-base font-bold text-terra mb-1">{node.title}</p>
          <p className="text-slate mb-6">
            You got {passedFirst} of {total} checks right first time.
          </p>

          {/* Granule breakdown */}
          <div className="space-y-2 mb-8 text-left">
            {node.granules.map((g) => {
              const result = nodeResults.find((r) => r.granuleId === g.id);
              const passed = result?.passed;
              return (
                <div
                  key={g.id}
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm ${
                    passed ? "bg-sage-light" : "bg-terra-light"
                  }`}
                >
                  <span className={passed ? "text-sage" : "text-terra"}>
                    {passed ? "✓" : "✗"}
                  </span>
                  <span className="text-navy font-medium">{g.objective}</span>
                </div>
              );
            })}
          </div>

          <button
            onClick={handleNextNode}
            className="bg-terra hover:bg-terra-dark text-white font-bold px-8 py-3.5 rounded-xl transition-colors text-lg"
          >
            {isLast ? "Finish Lesson →" : "Next Topic →"}
          </button>
        </div>
      </div>
    );
  }

  // ─── PHASE: complete ──────────────────

  if (phase === "complete") {
    const passedAll = results.filter((r) => r.passed);
    const failedAll = results.filter((r) => !r.passed);
    const percentage = Math.round((passedAll.length / totalGranules) * 100);
    const isPerfect = passedAll.length === totalGranules;
    const isGood = percentage >= 70;

    // Collect failed granule objectives for review
    const failedGranules = failedAll
      .map((r) => {
        for (const node of nodes) {
          const g = node.granules.find((g) => g.id === r.granuleId);
          if (g) return g.objective;
        }
        return null;
      })
      .filter(Boolean);

    return (
      <div className="animate-fade-in">
        <div className="bg-card rounded-2xl shadow-card p-8 max-w-2xl mx-auto">
          <div className="text-center mb-8">
            {/* Score circle */}
            <div
              className={`w-28 h-28 rounded-full mx-auto mb-6 flex items-center justify-center text-white font-bold text-3xl ${
                isPerfect
                  ? "bg-gradient-to-br from-sage to-emerald-500"
                  : isGood
                  ? "bg-gradient-to-br from-steel to-blue-500"
                  : "bg-gradient-to-br from-terra to-orange-400"
              }`}
            >
              {percentage}%
            </div>

            <h2 className="text-2xl font-extrabold text-navy mb-2">
              {isPerfect
                ? "Perfect Lesson! 🎉"
                : isGood
                ? "Great Progress! 💪"
                : "Good Start! 📚"}
            </h2>

            <p className="text-slate mb-1">
              You nailed{" "}
              <span className="font-bold text-navy">
                {passedAll.length} of {totalGranules}
              </span>{" "}
              checks first time
            </p>

            <p className="text-sm text-slate">
              {isPerfect
                ? "You understood everything on the first pass. Amazing."
                : isGood
                ? "Solid understanding! The points you missed are noted below."
                : "Don't worry — you've seen everything now. Try the flashcards and MCQs to lock it in."}
            </p>
          </div>

          {/* Nodes summary */}
          <div className="space-y-3 mb-6">
            {nodes.map((node) => (
              <div
                key={node.id}
                className="flex items-center gap-3 p-4 bg-sage-light rounded-xl"
              >
                <span className="text-sage text-lg">✓</span>
                <span className="font-semibold text-navy text-sm">
                  {node.title}
                </span>
              </div>
            ))}
          </div>

          {/* Weaknesses */}
          {failedGranules.length > 0 && (
            <div className="mb-6">
              <h4 className="text-sm font-bold text-terra mb-3">
                Areas to revisit:
              </h4>
              <div className="space-y-1.5">
                {failedGranules.map((obj, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 text-sm text-navy/80 bg-terra-light rounded-lg px-3 py-2"
                  >
                    <span className="text-terra mt-0.5 flex-shrink-0">●</span>
                    <span>{obj}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-3 justify-center">
            <button
              onClick={handleReset}
              className="bg-card-alt hover:bg-subtle text-navy font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              ↻ Redo Lesson
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
