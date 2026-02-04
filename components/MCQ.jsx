"use client";

import { useState, useCallback } from "react";

export default function MCQ({ questions }) {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [finished, setFinished] = useState(false);

  const question = questions[currentQ];
  const progress = ((currentQ + (showResult ? 1 : 0)) / questions.length) * 100;

  const handleSelect = useCallback(
    (index) => {
      if (showResult) return;
      setSelected(index);
      setShowResult(true);

      const isCorrect = index === question.correct;
      if (isCorrect) setScore((s) => s + 1);
      setAnswers((a) => [...a, { questionId: question.id, selected: index, correct: isCorrect }]);
    },
    [showResult, question]
  );

  const handleNext = useCallback(() => {
    if (currentQ + 1 >= questions.length) {
      setFinished(true);
    } else {
      setCurrentQ((q) => q + 1);
      setSelected(null);
      setShowResult(false);
    }
  }, [currentQ, questions.length]);

  const handleReset = useCallback(() => {
    setCurrentQ(0);
    setSelected(null);
    setShowResult(false);
    setScore(0);
    setAnswers([]);
    setFinished(false);
  }, []);

  if (finished) {
    const percentage = Math.round((score / questions.length) * 100);
    const isPerfect = score === questions.length;
    const isGood = percentage >= 70;

    return (
      <div className="animate-fade-in">
        <div className="bg-card rounded-2xl shadow-card p-8 text-center max-w-lg mx-auto">
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

          <h3 className="text-2xl font-bold mb-2">
            {isPerfect
              ? "Perfect Score! 🎉"
              : isGood
              ? "Great Work! 💪"
              : "Keep Practising! 📖"}
          </h3>

          <p className="text-slate mb-1">
            You got{" "}
            <span className="font-bold text-navy">
              {score} out of {questions.length}
            </span>{" "}
            correct
          </p>

          <p className="text-sm text-slate mb-8">
            {isPerfect
              ? "You nailed every single question. You know this material inside out."
              : isGood
              ? "Solid understanding! Review the ones you missed and you'll have it locked in."
              : "Don't worry — try the flashcards first, then come back and smash it."}
          </p>

          {/* Review missed questions */}
          {score < questions.length && (
            <div className="text-left mb-6">
              <h4 className="text-sm font-bold text-navy mb-3">Questions to review:</h4>
              {answers
                .filter((a) => !a.correct)
                .map((a) => {
                  const q = questions.find((q) => q.id === a.questionId);
                  return (
                    <div
                      key={a.questionId}
                      className="bg-terra-light rounded-xl p-4 mb-2 text-sm"
                    >
                      <p className="font-semibold text-navy mb-1">{q.question}</p>
                      <p className="text-sage font-medium">
                        ✓ {q.options[q.correct]}
                      </p>
                    </div>
                  );
                })}
            </div>
          )}

          <button
            onClick={handleReset}
            className="bg-terra hover:bg-terra-dark text-white font-semibold px-8 py-3 rounded-xl transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      {/* Progress */}
      <div className="flex items-center gap-4 mb-6">
        <div className="flex-1 h-2 bg-subtle rounded-full overflow-hidden">
          <div
            className="h-full bg-terra rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="text-sm font-semibold text-slate whitespace-nowrap">
          {currentQ + 1} / {questions.length}
        </span>
      </div>

      {/* Question card */}
      <div className="bg-card rounded-2xl shadow-card p-8 mb-4">
        <h3 className="text-xl font-bold text-navy mb-6 leading-relaxed">
          {question.question}
        </h3>

        <div className="space-y-3">
          {question.options.map((option, index) => {
            const isCorrect = index === question.correct;
            const isSelected = index === selected;
            let optionStyle =
              "bg-card-alt border-2 border-transparent hover:border-terra/30 hover:bg-terra-light/50 cursor-pointer";

            if (showResult) {
              if (isCorrect) {
                optionStyle = "bg-sage-light border-2 border-sage pulse-success";
              } else if (isSelected && !isCorrect) {
                optionStyle = "bg-error-light border-2 border-error/30";
              } else {
                optionStyle = "bg-card-alt border-2 border-transparent opacity-50";
              }
            }

            return (
              <button
                key={index}
                onClick={() => handleSelect(index)}
                disabled={showResult}
                className={`w-full text-left px-5 py-4 rounded-xl transition-all duration-200 flex items-center gap-4 ${optionStyle}`}
              >
                <span
                  className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0 ${
                    showResult && isCorrect
                      ? "bg-sage text-white"
                      : showResult && isSelected && !isCorrect
                      ? "bg-error text-white"
                      : "bg-subtle-dark text-slate"
                  }`}
                >
                  {String.fromCharCode(65 + index)}
                </span>
                <span className="font-medium text-navy">{option}</span>
                {showResult && isCorrect && (
                  <span className="ml-auto text-sage text-lg">✓</span>
                )}
                {showResult && isSelected && !isCorrect && (
                  <span className="ml-auto text-error text-lg">✗</span>
                )}
              </button>
            );
          })}
        </div>

        {/* Explanation */}
        {showResult && (
          <div className="mt-6 p-4 bg-steel-light rounded-xl animate-fade-in">
            <p className="text-sm text-steel font-medium leading-relaxed">
              <span className="font-bold">💡 </span>
              {question.explanation}
            </p>
          </div>
        )}
      </div>

      {/* Next button */}
      {showResult && (
        <div className="flex justify-end animate-fade-in">
          <button
            onClick={handleNext}
            className="bg-btn hover:bg-btn-hover text-white font-semibold px-6 py-3 rounded-xl transition-colors flex items-center gap-2"
          >
            {currentQ + 1 >= questions.length ? "See Results" : "Next Question"}
            <span>→</span>
          </button>
        </div>
      )}
    </div>
  );
}
