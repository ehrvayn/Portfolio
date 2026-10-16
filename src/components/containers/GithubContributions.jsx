import React from "react";
import { GitHubCalendar } from "react-github-calendar";
import { useDarkMode } from "../../context/DarkmodeProvider";

export default function GithubContributions() {
  const { darkMode } = useDarkMode();
  // Greyscale ramp: the calendar takes raw hex, so Tailwind classes can't apply.
  const customTheme = {
    light: ["#e5e7eb", "#d1d5db", "#9ca3af", "#6b7280", "#374151"],
    dark: ["#1a1a1a", "#3f3f46", "#71717a", "#a1a1aa", "#e4e4e7"],
  };

  return (
    <div
      className={`p-6 md:p-8 border ${
        darkMode
          ? "bg-[#17171a] border-gray-500/40 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
          : "bg-white border-gray-500/40 shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
      }`}
    >
      <div className="flex justify-between items-center pb-5">
        <h2
          className={`text-lg uppercase font-mono font-bold tracking-tight ${
            darkMode ? "text-gray-200" : "text-gray-900"
          }`}
        >
          GitHub Contributions
        </h2>
        <a
          href="https://github.com/ehrvayn"
          target="_blank"
          rel="noopener noreferrer"
          className={`text-xs font-mono flex items-center gap-1 transition-colors ${
            darkMode
              ? "text-gray-200 hover:text-gray-100"
              : "text-gray-900 hover:text-gray-700"
          }`}
        >
          <span>View GitHub Profile</span>
          <span>↗</span>
        </a>
      </div>

      <div
        className={`flex justify-center overflow-x-auto px-4 py-4 border ${
          darkMode
            ? "bg-[#101013] border-gray-500/40"
            : "bg-gray-50 border-gray-200"
        }`}
      >
        <GitHubCalendar
          username="ehrvayn"
          colorScheme={darkMode ? "dark" : "light"}
          blockSize={16}
          theme={customTheme}
          blockMargin={4}
          fontSize={14}
          blockRadius={0}
          showYearSelect
        />
      </div>
    </div>
  );
}
