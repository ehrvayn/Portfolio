import React from "react";
import { GitHubCalendar } from "react-github-calendar";
import { useDarkMode } from "../../context/DarkmodeProvider";

export default function GithubContributions() {
  const { darkMode } = useDarkMode();
  const customTheme = {
    light: ["#ebedf0", "#ffedd5", "#fed7aa", "#fb923c", "#ea580c"],
    dark: ["#161616", "#431407", "#7c2d12", "#c2410c", "#f97316"],
  };

  return (
    <div
      className={`p-6 md:p-8 border ${
        darkMode
          ? "bg-[#0f0f0f] border-orange-800/30 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
          : "bg-white border-orange-800/30 shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
      }`}
    >
      <div className="flex justify-between items-center pb-5">
        <h2
          className={`text-lg uppercase font-mono font-bold tracking-tight ${
            darkMode ? "text-white" : "text-black"
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
              ? "text-orange-400 hover:text-orange-300"
              : "text-orange-600 hover:text-orange-700"
          }`}
        >
          <span>View GitHub Profile</span>
          <span>↗</span>
        </a>
      </div>

      <div
        className={`flex justify-center overflow-x-auto px-4 py-4 border ${
          darkMode
            ? "bg-[#0a0a0a] border-orange-800/20"
            : "bg-gray-50 border-gray-200"
        }`}
      >
        <GitHubCalendar
          username="ehrvayn"
          colorScheme={darkMode ? "dark" : "light"}
          blockSize={24}
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
