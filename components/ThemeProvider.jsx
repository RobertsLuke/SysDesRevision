"use client";

import { createContext, useContext, useState, useEffect, useCallback } from "react";

const ThemeContext = createContext({ theme: "warm", setTheme: () => {} });

export function useTheme() {
  return useContext(ThemeContext);
}

export default function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState("warm");
  const [mounted, setMounted] = useState(false);

  // Sync with the data-theme attribute that was set by the inline script in <head>
  useEffect(() => {
    try {
      const stored = localStorage.getItem("ds-theme") || "warm";
      setThemeState(stored);
      document.documentElement.setAttribute("data-theme", stored);
    } catch (e) {
      // localStorage unavailable
    }
    setMounted(true);
  }, []);

  const setTheme = useCallback((newTheme) => {
    setThemeState(newTheme);

    // Add brief transition class for smooth color change
    document.documentElement.classList.add("theme-transitioning");
    document.documentElement.setAttribute("data-theme", newTheme);

    try {
      localStorage.setItem("ds-theme", newTheme);
    } catch (e) {
      // localStorage unavailable
    }

    // Remove transition class after animation completes
    setTimeout(() => {
      document.documentElement.classList.remove("theme-transitioning");
    }, 400);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, mounted }}>
      {children}
    </ThemeContext.Provider>
  );
}
