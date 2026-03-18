"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { weeks, moduleInfo } from "@/data/weeks";

export default function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const availableWeeks = Object.values(weeks);
  const totalWeeks = moduleInfo.totalWeeks;

  const nav = (
    <aside
      className={`fixed left-0 top-0 bottom-0 w-[260px] bg-sidebar text-white flex flex-col z-50 transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
    >
      {/* Header */}
      <div className="p-6 pb-4 flex items-start justify-between">
        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-terra opacity-90 mb-1">
            {moduleInfo.code}
          </div>
          <h1 className="text-lg font-bold leading-tight">{moduleInfo.name}</h1>
          <p className="text-xs text-gray-400 mt-1">Revision Hub</p>
        </div>
        {/* Close button — mobile only */}
        <button
          onClick={() => setOpen(false)}
          className="md:hidden ml-2 mt-1 text-gray-400 hover:text-white p-1 rounded"
          aria-label="Close menu"
        >
          ✕
        </button>
      </div>

      {/* Divider */}
      <div className="mx-6 h-px bg-white/10" />

      {/* Week navigation */}
      <nav className="flex-1 overflow-y-auto py-4 px-3">
        {/* Trial Lesson */}
        {weeks[0] && (
          <>
            <div className="text-[11px] font-bold uppercase tracking-widest text-gray-500 px-3 mb-3">
              Trial Lesson
            </div>
            <Link
              href="/week/0"
              onClick={() => setOpen(false)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group mb-0.5 ${
                pathname === "/week/0"
                  ? "bg-terra/20 text-white"
                  : "text-gray-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              <span
                className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold transition-colors ${
                  pathname === "/week/0"
                    ? "bg-terra text-white"
                    : "bg-white/10 text-gray-400 group-hover:bg-white/15"
                }`}
              >
                {weeks[0].emoji}
              </span>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-semibold">{weeks[0].title}</div>
                <div className="text-[11px] text-gray-500 truncate">
                  {weeks[0].subtitle}
                </div>
              </div>
            </Link>
            <div className="mx-3 my-3 h-px bg-white/10" />
          </>
        )}

        <div className="text-[11px] font-bold uppercase tracking-widest text-gray-500 px-3 mb-3">
          Weeks
        </div>

        {Array.from({ length: totalWeeks }, (_, i) => i + 1).map((weekNum) => {
          const week = weeks[weekNum];
          const isActive = pathname === `/week/${weekNum}`;
          const isAvailable = !!week;

          if (!isAvailable) {
            return (
              <div
                key={weekNum}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-600 cursor-not-allowed select-none"
              >
                <span className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center text-xs font-bold text-gray-600">
                  {weekNum}
                </span>
                <span className="text-sm">Week {weekNum}</span>
                <span className="ml-auto text-[10px] bg-white/5 px-2 py-0.5 rounded-full text-gray-600">
                  Soon
                </span>
              </div>
            );
          }

          return (
            <Link
              key={weekNum}
              href={`/week/${weekNum}`}
              onClick={() => setOpen(false)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group mb-0.5 ${
                isActive
                  ? "bg-terra/20 text-white"
                  : "text-gray-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              <span
                className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold transition-colors ${
                  isActive
                    ? "bg-terra text-white"
                    : "bg-white/10 text-gray-400 group-hover:bg-white/15"
                }`}
              >
                {week.emoji || weekNum}
              </span>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-semibold">Week {weekNum}</div>
                <div className="text-[11px] text-gray-500 truncate">
                  {week.title}
                </div>
              </div>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-white/10">
        <div className="text-[11px] text-gray-500 text-center">
          Built for revision 📚
        </div>
      </div>
    </aside>
  );

  return (
    <>
      {/* Hamburger button — mobile only, always visible */}
      <button
        onClick={() => setOpen(true)}
        className={`md:hidden fixed top-4 left-4 z-40 bg-sidebar text-white p-2 rounded-lg shadow-lg transition-opacity duration-200 ${
          open ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
        aria-label="Open menu"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Backdrop — mobile only */}
      {open && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {nav}
    </>
  );
}
