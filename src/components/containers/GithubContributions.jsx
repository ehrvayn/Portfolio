import React, { useCallback, useLayoutEffect, useRef, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { useDarkMode } from "../../context/DarkmodeProvider";

// react-activity-calendar lays the grid out as:
//   width = weeks * (blockSize + blockMargin) - blockMargin
// where `weeks` is derived from the date range the API returns — it is NOT a
// constant 53, so it has to be measured rather than assumed.
const MARGIN_RATIO = 0.3;
const FONT_RATIO = 0.9;
const MIN_BLOCK = 4;
const MAX_BLOCK = 30;

export default function GithubContributions() {
  const { darkMode } = useDarkMode();
  const wrapRef = useRef(null);
  const [blockSize, setBlockSize] = useState(14);

  const customTheme = {
    light: ["#e5e7eb", "#d1d5db", "#9ca3af", "#6b7280", "#374151"],
    dark: ["#1a1a1a", "#3f3f46", "#71717a", "#a1a1aa", "#e4e4e7"],
  };

  const fit = useCallback(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const available = wrap.clientWidth;
    if (!available) return;

    const root = wrap.querySelector(".react-activity-calendar");
    if (!root) return;

    const weeks = root.querySelectorAll(
      'svg > g[transform^="translate("]',
    ).length;
    if (!weeks) return;

    const denominator = weeks * (1 + MARGIN_RATIO) - MARGIN_RATIO;
    let next = available / denominator;

    if (next * MARGIN_RATIO < 1) {
      next = (available - (weeks - 1)) / weeks;
    }

    next = Math.min(MAX_BLOCK, Math.max(MIN_BLOCK, next));

    setBlockSize((prev) => (Math.abs(prev - next) < 0.01 ? prev : next));
  }, []);

  useLayoutEffect(() => {
    fit();

    const el = wrapRef.current;
    if (!el) return;

    const observer = new ResizeObserver(() => fit());
    observer.observe(el);

    const mutations = new MutationObserver(() => fit());
    mutations.observe(el, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutations.disconnect();
    };
  }, [fit]);

  const blockMargin = Math.max(1, blockSize * MARGIN_RATIO);
  const fontSize = Math.max(8, blockSize * FONT_RATIO);

  return (
    <div
      className={`p-6 md:p-8 border ${
        darkMode
          ? "bg-[#17171a] border-gray-500/40 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
          : "bg-white border-gray-500/40 shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
      }`}
    >
      <div className="flex justify-between items-center pb-5 gap-3">
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
          className={`text-xs font-mono flex items-center gap-1 transition-colors shrink-0 ${
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
        className={`w-full py-4 px-2 border ${
          darkMode
            ? "bg-[#101013] border-gray-500/40"
            : "bg-gray-50 border-gray-200"
        }`}
      >
        <div
          ref={wrapRef}
          data-github-cal-wrap
          className="flex justify-center w-full"
        >
          <GitHubCalendar
            username="ehrvayn"
            colorScheme={darkMode ? "dark" : "light"}
            blockSize={blockSize}
            theme={customTheme}
            blockMargin={blockMargin}
            fontSize={fontSize}
            blockRadius={0}
            showYearSelect
          />
        </div>
      </div>
    </div>
  );
}
