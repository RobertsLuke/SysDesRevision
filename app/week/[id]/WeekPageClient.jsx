"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { weeks } from "@/data/weeks";
import Sidebar from "@/components/Sidebar";
import MCQ from "@/components/MCQ";
import Flashcards from "@/components/Flashcards";
import ShortAnswer from "@/components/ShortAnswer";
import Teach from "@/components/Teach";
import StudyGuide from "@/components/StudyGuide";
import ThemeSwitcher from "@/components/ThemeSwitcher";

const allTabs = [
  { id: "guide", label: "Study Guide", emoji: "\u{1F4D6}", description: "Read through the material", requiresGuide: true },
  { id: "learn", label: "Learn", emoji: "\u{1F9E0}", description: "Step-by-step guided lesson", requiresTeach: true },
  { id: "mcq", label: "MCQs", emoji: "\u{1F4DD}", description: "Test your knowledge" },
  { id: "flashcards", label: "Flashcards", emoji: "\u{1F3B4}", description: "Review key concepts" },
  { id: "short", label: "Short Answer", emoji: "\u270D\uFE0F", description: "AI-marked responses" },
];

export default function WeekPageClient() {
  const params = useParams();
  const weekId = parseInt(params.id);
  const week = weeks[weekId];
  const tabs = allTabs.filter((t) => {
    if (t.requiresGuide) return !!week?.guide;
    if (t.requiresTeach) return !!week?.teach;
    return true;
  });
  const [activeTab, setActiveTab] = useState(
    week?.guide ? "guide" : week?.teach ? "learn" : "mcq"
  );

  if (!week) {
    return (
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="md:ml-[260px] flex-1 p-4 sm:p-8 flex items-center justify-center">
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

      <main className="md:ml-[260px] flex-1 min-h-screen">
        {/* Header */}
        <header className="sticky top-0 z-30 bg-cream/80 backdrop-blur-lg border-b border-line">
          <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-8 pt-4 sm:pt-6 pb-0">
            {/* Week info + theme switcher */}
            <div className="flex items-start justify-between mb-3 sm:mb-4 pl-10 md:pl-0">
              <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                <span className="text-2xl sm:text-3xl flex-shrink-0">{week.emoji}</span>
                <div className="min-w-0">
                  <div className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-terra">
                    {week.isTrial ? "Trial Lesson" : `Week ${week.id}`}
                  </div>
                  <h2 className="text-lg sm:text-2xl font-extrabold text-navy leading-tight truncate">
                    {week.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate truncate hidden sm:block">{week.subtitle}</p>
                </div>
              </div>

              {/* Theme switcher — top right */}
              <div className="flex-shrink-0 ml-2">
                <ThemeSwitcher />
              </div>
            </div>

            {/* Tabs — emoji-only on small screens, full labels on sm+ */}
            <div className="flex gap-0.5 sm:gap-1 overflow-x-auto scrollbar-none -mx-1 px-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  title={tab.label}
                  className={`relative px-3 sm:px-5 py-2.5 sm:py-3 rounded-t-xl text-sm font-semibold transition-all whitespace-nowrap flex-shrink-0 ${
                    activeTab === tab.id
                      ? "bg-card text-navy shadow-sm tab-active"
                      : "text-slate hover:text-navy hover:bg-card/50"
                  }`}
                >
                  <span className="sm:mr-1.5">{tab.emoji}</span>
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-8 py-4 sm:py-8">
          {/* Tab description */}
          <p className="text-xs sm:text-sm text-slate mb-4 sm:mb-6">
            {tabs.find((t) => t.id === activeTab)?.description}
            {activeTab === "guide" && week.guide && ` — ${week.guide.sections.length} sections`}
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
          {activeTab === "guide" && week.guide && <StudyGuide guide={week.guide} />}
          {activeTab === "learn" && week.teach && <Teach teach={week.teach} />}
          {activeTab === "mcq" && <MCQ questions={week.mcqs} />}
          {activeTab === "flashcards" && <Flashcards cards={week.flashcards} />}
          {activeTab === "short" && <ShortAnswer questions={week.shortAnswers} />}
        </div>
      </main>
    </div>
  );
}
