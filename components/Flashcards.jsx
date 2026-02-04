"use client";

import { useState, useCallback, useEffect } from "react";

export default function Flashcards({ cards }) {
  const [currentCard, setCurrentCard] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [reviewed, setReviewed] = useState(new Set());

  const card = cards[currentCard];
  const progress = (reviewed.size / cards.length) * 100;

  const flip = useCallback(() => {
    setIsFlipped((f) => !f);
    setReviewed((r) => new Set([...r, currentCard]));
  }, [currentCard]);

  const goNext = useCallback(() => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentCard((c) => (c + 1) % cards.length);
    }, 150);
  }, [cards.length]);

  const goPrev = useCallback(() => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentCard((c) => (c - 1 + cards.length) % cards.length);
    }, 150);
  }, [cards.length]);

  const reset = useCallback(() => {
    setCurrentCard(0);
    setIsFlipped(false);
    setReviewed(new Set());
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e) => {
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        flip();
      } else if (e.key === "ArrowRight") {
        goNext();
      } else if (e.key === "ArrowLeft") {
        goPrev();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [flip, goNext, goPrev]);

  return (
    <div className="animate-fade-in">
      {/* Progress */}
      <div className="flex items-center gap-4 mb-6">
        <div className="flex-1 h-2 bg-subtle rounded-full overflow-hidden">
          <div
            className="h-full bg-sand rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="text-sm font-semibold text-slate">
          {reviewed.size} / {cards.length} reviewed
        </span>
      </div>

      {/* Card */}
      <div className="flashcard-container max-w-2xl mx-auto mb-6">
        <div
          className={`flashcard-inner cursor-pointer ${isFlipped ? "flipped" : ""}`}
          onClick={flip}
        >
          {/* Front */}
          <div className="flashcard-face bg-card shadow-card border-2 border-sand/30">
            <div className="text-xs font-bold uppercase tracking-widest text-sand mb-4">
              Question
            </div>
            <p className="text-xl font-bold text-navy text-center leading-relaxed">
              {card.front}
            </p>
            <div className="mt-6 text-sm text-slate/60">Click or press space to flip</div>
          </div>

          {/* Back */}
          <div className="flashcard-face flashcard-back bg-gradient-to-br from-sidebar to-sidebar-light text-white shadow-card-hover">
            <div className="text-xs font-bold uppercase tracking-widest text-sand mb-4">
              Answer
            </div>
            <div className="text-base font-medium text-center leading-relaxed whitespace-pre-line">
              {card.back}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={goPrev}
          className="w-12 h-12 rounded-xl bg-card shadow-card hover:shadow-card-hover flex items-center justify-center text-navy font-bold transition-all hover:-translate-x-0.5"
        >
          ←
        </button>

        <div className="flex items-center gap-1.5">
          {cards.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setIsFlipped(false);
                setTimeout(() => setCurrentCard(i), 150);
              }}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                i === currentCard
                  ? "bg-terra w-6"
                  : reviewed.has(i)
                  ? "bg-sand"
                  : "bg-subtle-dark"
              }`}
            />
          ))}
        </div>

        <button
          onClick={goNext}
          className="w-12 h-12 rounded-xl bg-card shadow-card hover:shadow-card-hover flex items-center justify-center text-navy font-bold transition-all hover:translate-x-0.5"
        >
          →
        </button>
      </div>

      {/* Keyboard hint & reset */}
      <div className="text-center mt-6 space-y-2">
        <p className="text-xs text-slate/50">
          ← → to navigate · Space to flip
        </p>
        {reviewed.size === cards.length && (
          <button
            onClick={reset}
            className="text-sm font-semibold text-terra hover:text-terra-dark transition-colors"
          >
            ↻ Start over
          </button>
        )}
      </div>
    </div>
  );
}
