"use client";

import { useState, useCallback } from "react";

export default function ShortAnswer({ questions }) {
  const [currentQ, setCurrentQ] = useState(0);
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [showHint, setShowHint] = useState(false);
  const [completedQuestions, setCompletedQuestions] = useState({});
  const [error, setError] = useState(null);

  const question = questions[currentQ];

  const handleSubmit = useCallback(async () => {
    if (!answer.trim()) return;
    setLoading(true);
    setError(null);

    try {
      const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;
      if (!apiKey) {
        setError("OpenAI API key not configured.");
        return;
      }

      const systemPrompt = `You are a fair, encouraging academic marker for a university Distributed Systems module.

You will receive a short-answer question, the total marks available, a marking guide listing the key points expected, and a student's answer.

Your job:
1. Assess which key points from the marking guide the student has addressed (even if worded differently).
2. Award marks proportionally based on how many key points were covered.
3. Provide constructive, encouraging feedback.
4. Write a concise model answer that would achieve full marks — this should be a direct, well-structured answer a student could learn from.

Respond with ONLY valid JSON (no markdown, no backticks) in this exact format:
{
  "score": <number out of total marks>,
  "feedback": "<2-3 sentences of encouraging, constructive feedback>",
  "pointsHit": ["<key point covered>", ...],
  "pointsMissed": ["<key point missed>", ...],
  "modelAnswer": "<a concise model answer that covers all key points and would achieve full marks>"
}

Be fair — give credit for correct understanding even if the wording isn't perfect. Round to the nearest 0.5 mark. Be warm and encouraging in tone.`;

      const userPrompt = `Question: ${question.question}

Total marks: ${question.marks}

Key points to look for:
${question.markingGuide.map((p, i) => `${i + 1}. ${p}`).join("\n")}

Student's answer:
${answer.trim()}`;

      const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "gpt-4.1-mini",
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: userPrompt },
          ],
          temperature: 0.3,
          max_completion_tokens: 800,
        }),
      });

      if (!res.ok) {
        setError("Failed to get AI feedback. Please try again.");
        return;
      }

      const data = await res.json();
      const content = data.choices[0].message.content.trim();
      const cleaned = content.replace(/```json|```/g, "").trim();
      const parsed = JSON.parse(cleaned);

      setResult(parsed);
      setCompletedQuestions((prev) => ({
        ...prev,
        [question.id]: { answer: answer.trim(), result: parsed },
      }));
    } catch (err) {
      setError("Network error. Check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }, [answer, question]);

  const handleNext = useCallback(() => {
    const nextIdx = currentQ + 1;
    if (nextIdx < questions.length) {
      setCurrentQ(nextIdx);
      const nextQ = questions[nextIdx];
      const existing = completedQuestions[nextQ.id];
      setAnswer(existing?.answer || "");
      setResult(existing?.result || null);
      setShowHint(false);
      setError(null);
    }
  }, [currentQ, questions, completedQuestions]);

  const handlePrev = useCallback(() => {
    const prevIdx = currentQ - 1;
    if (prevIdx >= 0) {
      setCurrentQ(prevIdx);
      const prevQ = questions[prevIdx];
      const existing = completedQuestions[prevQ.id];
      setAnswer(existing?.answer || "");
      setResult(existing?.result || null);
      setShowHint(false);
      setError(null);
    }
  }, [currentQ, questions, completedQuestions]);

  const handleRetry = useCallback(() => {
    setAnswer("");
    setResult(null);
    setError(null);
    setShowHint(false);
  }, []);

  const completedCount = Object.keys(completedQuestions).length;
  const totalMarks = questions.reduce((sum, q) => sum + q.marks, 0);
  const earnedMarks = Object.values(completedQuestions).reduce(
    (sum, q) => sum + (q.result?.score || 0),
    0
  );

  const scoreColor = (score, total) => {
    const pct = score / total;
    if (pct >= 0.8) return "text-sage";
    if (pct >= 0.5) return "text-sand";
    return "text-terra";
  };

  return (
    <div className="animate-fade-in">
      {/* Overall progress */}
      <div className="flex items-center gap-4 mb-6">
        <div className="flex-1 h-2 bg-subtle rounded-full overflow-hidden">
          <div
            className="h-full bg-steel rounded-full transition-all duration-500 ease-out"
            style={{
              width: `${(completedCount / questions.length) * 100}%`,
            }}
          />
        </div>
        <span className="text-sm font-semibold text-slate">
          {completedCount} / {questions.length} answered
        </span>
      </div>

      {/* Question dots */}
      <div className="flex items-center gap-2 mb-6">
        {questions.map((q, i) => {
          const isCompleted = !!completedQuestions[q.id];
          const isCurrent = i === currentQ;
          return (
            <button
              key={q.id}
              onClick={() => {
                setCurrentQ(i);
                const existing = completedQuestions[q.id];
                setAnswer(existing?.answer || "");
                setResult(existing?.result || null);
                setShowHint(false);
                setError(null);
              }}
              className={`h-9 px-3 rounded-lg text-sm font-bold transition-all ${
                isCurrent
                  ? "bg-steel text-white"
                  : isCompleted
                  ? "bg-sage-light text-sage"
                  : "bg-subtle text-slate hover:bg-subtle-dark"
              }`}
            >
              Q{i + 1}
            </button>
          );
        })}
      </div>

      {/* Question card */}
      <div className="bg-card rounded-2xl shadow-card p-8 mb-4">
        <div className="flex items-start justify-between gap-4 mb-6">
          <h3 className="text-lg font-bold text-navy leading-relaxed flex-1">
            {question.question}
          </h3>
          <span className="text-sm font-bold text-steel bg-steel-light px-3 py-1 rounded-lg whitespace-nowrap flex-shrink-0">
            {question.marks} marks
          </span>
        </div>

        {/* Hint toggle */}
        {!result && (
          <button
            onClick={() => setShowHint((h) => !h)}
            className="text-sm text-sand hover:text-terra font-semibold mb-4 transition-colors"
          >
            {showHint ? "Hide hint ↑" : "💡 Show hint"}
          </button>
        )}

        {showHint && !result && (
          <div className="bg-sand-light rounded-xl p-4 mb-4 animate-fade-in">
            <p className="text-sm text-navy/80 font-medium">{question.hint}</p>
          </div>
        )}

        {/* Answer area */}
        {!result ? (
          <>
            <textarea
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Type your answer here..."
              rows={6}
              className="w-full border-2 border-line rounded-xl p-4 text-navy bg-card-alt font-medium resize-none transition-all focus:border-terra"
              disabled={loading}
            />

            {error && (
              <div className="mt-3 p-3 bg-error-light rounded-xl text-sm text-error font-medium animate-fade-in">
                {error}
              </div>
            )}

            <div className="flex items-center justify-between mt-4">
              <span className="text-xs text-slate/50">
                {answer.trim().split(/\s+/).filter(Boolean).length} words
              </span>
              <button
                onClick={handleSubmit}
                disabled={loading || !answer.trim()}
                className={`font-semibold px-6 py-3 rounded-xl transition-all flex items-center gap-2 ${
                  loading || !answer.trim()
                    ? "bg-subtle text-slate/60 cursor-not-allowed"
                    : "bg-terra hover:bg-terra-dark text-white"
                }`}
              >
                {loading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Marking...
                  </>
                ) : (
                  "Submit for Marking ✨"
                )}
              </button>
            </div>
          </>
        ) : (
          /* Results */
          <div className="animate-fade-in">
            {/* Score */}
            <div className="flex items-center gap-4 mb-6 p-4 bg-card-alt rounded-xl">
              <div
                className={`text-4xl font-extrabold ${scoreColor(
                  result.score,
                  question.marks
                )}`}
              >
                {result.score}
              </div>
              <div>
                <div className="text-sm text-slate">out of {question.marks} marks</div>
                <div className="h-2 w-32 bg-subtle-dark rounded-full mt-1 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-700 ${
                      result.score / question.marks >= 0.8
                        ? "bg-sage"
                        : result.score / question.marks >= 0.5
                        ? "bg-sand"
                        : "bg-terra"
                    }`}
                    style={{
                      width: `${(result.score / question.marks) * 100}%`,
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Feedback */}
            <div className="bg-steel-light rounded-xl p-4 mb-4">
              <p className="text-sm text-steel font-medium leading-relaxed">
                {result.feedback}
              </p>
            </div>

            {/* Points hit */}
            {result.pointsHit?.length > 0 && (
              <div className="mb-4">
                <h4 className="text-sm font-bold text-sage mb-2">
                  ✓ Points you covered
                </h4>
                <div className="space-y-1.5">
                  {result.pointsHit.map((point, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 text-sm text-navy/80 bg-sage-light rounded-lg px-3 py-2"
                    >
                      <span className="text-sage mt-0.5 flex-shrink-0">●</span>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Points missed */}
            {result.pointsMissed?.length > 0 && (
              <div className="mb-6">
                <h4 className="text-sm font-bold text-terra mb-2">
                  ✗ Points to include next time
                </h4>
                <div className="space-y-1.5">
                  {result.pointsMissed.map((point, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 text-sm text-navy/80 bg-terra-light rounded-lg px-3 py-2"
                    >
                      <span className="text-terra mt-0.5 flex-shrink-0">●</span>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Model answer */}
            {result.modelAnswer && (
              <div className="mb-4 p-4 bg-steel-light rounded-xl border border-steel/20">
                <h4 className="text-xs font-bold text-steel uppercase tracking-wider mb-2">
                  Model Answer
                </h4>
                <p className="text-sm text-navy/80 leading-relaxed whitespace-pre-wrap">
                  {result.modelAnswer}
                </p>
              </div>
            )}

            {/* Your answer */}
            <div className="mb-4 p-4 bg-card-alt rounded-xl">
              <h4 className="text-xs font-bold text-slate uppercase tracking-wider mb-2">
                Your answer
              </h4>
              <p className="text-sm text-navy/70 whitespace-pre-wrap">{answer}</p>
            </div>

            <button
              onClick={handleRetry}
              className="text-sm font-semibold text-terra hover:text-terra-dark transition-colors"
            >
              ↻ Try again
            </button>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={handlePrev}
          disabled={currentQ === 0}
          className={`font-semibold px-4 py-2 rounded-xl transition-colors text-sm ${
            currentQ === 0
              ? "text-slate/40 cursor-not-allowed"
              : "text-navy hover:bg-subtle"
          }`}
        >
          ← Previous
        </button>

        {/* Running total */}
        {completedCount > 0 && (
          <div className="text-sm text-slate">
            Running total:{" "}
            <span className="font-bold text-navy">
              {earnedMarks} / {totalMarks}
            </span>
          </div>
        )}

        <button
          onClick={handleNext}
          disabled={currentQ >= questions.length - 1}
          className={`font-semibold px-4 py-2 rounded-xl transition-colors text-sm ${
            currentQ >= questions.length - 1
              ? "text-slate/40 cursor-not-allowed"
              : "text-navy hover:bg-subtle"
          }`}
        >
          Next →
        </button>
      </div>
    </div>
  );
}
