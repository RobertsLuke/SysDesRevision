"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { weeks } from "@/data/weeks";
import Sidebar from "@/components/Sidebar";
import MCQ from "@/components/MCQ";
import Flashcards from "@/components/Flashcards";
import ShortAnswer from "@/components/ShortAnswer";
import Teach from "@/components/Teach";
import ThemeSwitcher from "@/components/ThemeSwitcher";

const allTabs = [
  { id: "learn", label: "Learn", emoji: "📖", description: "Step-by-step guided lesson", requiresTeach: true },
  { id: "mcq", label: "MCQs", emoji: "📝", description: "Test your knowledge" },
  { id: "flashcards", label: "Flashcards", emoji: "🎴", description: "Review key concepts" },
  { id: "short", label: "Short Answer", emoji: "✍️", description: "AI-marked responses" },
];

export default function WeekPage() {
  const params = useParams();
  const weekId = parseInt(params.id);
  const week = weeks[weekId];
  const tabs = allTabs.filter((t) => !t.requiresTeach || week?.teach);
  const [activeTab, setActiveTab] = useState(week?.teach ? "learn" : "mcq");

  if (!week) {
    return (
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="ml-[260px] flex-1 p-8 flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4">🔒</div>
            <h2 className="text-2xl font-bold text-navy mb-2">
              Week {weekId} — Coming Soon
            </h2>
            <p className="text-slate">This week&apos;s content hasn&apos;t been added yet.</p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="ml-[260px] flex-1 min-h-screen">
        {/* Header */}
        <header className="sticky top-0 z-40 bg-cream/80 backdrop-blur-lg border-b border-line">
          <div className="max-w-4xl mx-auto px-8 pt-6 pb-0">
            {/* Week info + theme switcher */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{week.emoji}</span>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-terra">
                    {week.isTrial ? "Trial Lesson" : `Week ${week.id}`}
                  </div>
                  <h2 className="text-2xl font-extrabold text-navy">
                    {week.title}
                  </h2>
                  <p className="text-sm text-slate">{week.subtitle}</p>
                </div>
              </div>

              {/* Theme switcher — top right */}
              <ThemeSwitcher />
            </div>

            {/* Tabs */}
            <div className="flex gap-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-5 py-3 rounded-t-xl text-sm font-semibold transition-all ${
                    activeTab === tab.id
                      ? "bg-card text-navy shadow-sm tab-active"
                      : "text-slate hover:text-navy hover:bg-card/50"
                  }`}
                >
                  <span className="mr-1.5">{tab.emoji}</span>
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-8 py-8">
          {/* Tab description */}
          <p className="text-sm text-slate mb-6">
            {tabs.find((t) => t.id === activeTab)?.description}
            {activeTab === "learn" && week.teach && ` — ${week.teach.nodes.length} topics, ${week.teach.nodes.reduce((s, n) => s + n.granules.length, 0)} concepts`}
            {activeTab === "mcq" && ` — ${week.mcqs.length} questions`}
            {activeTab === "flashcards" && ` — ${week.flashcards.length} cards`}
            {activeTab === "short" &&
              ` — ${week.shortAnswers.length} questions, ${week.shortAnswers.reduce(
                (s, q) => s + q.marks,
                0
              )} marks total`}
          </p>

          {/* Active component */}
          {activeTab === "learn" && week.teach && <Teach teach={week.teach} />}
          {activeTab === "mcq" && <MCQ questions={week.mcqs} />}
          {activeTab === "flashcards" && <Flashcards cards={week.flashcards} />}
          {activeTab === "short" && <ShortAnswer questions={week.shortAnswers} />}
        </div>
      </main>
    </div>
  );
}
