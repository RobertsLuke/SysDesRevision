"use client";

import { useTheme } from "./ThemeProvider";

const themes = [
  { id: "warm", label: "Warm", color: "#E07A5F" },
  { id: "dracula", label: "Dracula", color: "#BD93F9" },
  { id: "onedark", label: "One Dark", color: "#61AFEF" },
  { id: "tokyo", label: "Tokyo Night", color: "#FF9E64" },
];

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center gap-2">
      {themes.map((t) => {
        const isActive = theme === t.id;
        return (
          <button
            key={t.id}
            onClick={() => setTheme(t.id)}
            aria-label={`Switch to ${t.label} theme`}
            title={t.label}
            className="relative w-7 h-7 rounded-full transition-all duration-200 hover:scale-110 focus:outline-none"
            style={{
              backgroundColor: t.color,
              boxShadow: isActive
                ? `0 0 0 2px rgb(var(--c-bg)), 0 0 0 4px ${t.color}`
                : "none",
              opacity: isActive ? 1 : 0.55,
              transform: isActive ? "scale(1.1)" : "scale(1)",
            }}
          >
            {isActive && (
              <span className="absolute inset-0 flex items-center justify-center text-white text-xs font-bold drop-shadow-sm">
                ✓
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
