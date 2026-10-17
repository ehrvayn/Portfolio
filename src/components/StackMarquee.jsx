import { useMemo } from "react";
import { useDarkMode } from "../context/DarkmodeProvider";

const iconFiles = import.meta.glob("../assets/icons/*.svg", {
  query: "?raw",
  import: "default",
  eager: true,
});

function loadIcon(name) {
  const raw = iconFiles[`../assets/icons/${name}.svg`];
  if (typeof raw !== "string") return null;

  const viewBox = raw.match(/viewBox="([^"]+)"/)?.[1] ?? "0 0 24 24";
  const inner = raw
    .replace(/^[\s\S]*?<svg[^>]*>/, "")
    .replace(/<\/svg>\s*$/, "")
    .trim();

  if (!inner) return null;

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" fill="currentColor" width="1em" height="1em">${inner}</svg>`;
}

function StackIcon({ name }) {
  const svg = useMemo(() => loadIcon(name), [name]);

  if (!svg) return null;

  return (
    <span
      className="block w-full h-full [&>svg]:block [&>svg]:w-full [&>svg]:h-full"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}

const STACKS = [
  { name: "HTML5", icon: "html5" },
  { name: "CSS3", icon: "css3" },
  { name: "JavaScript", icon: "javascript" },
  { name: "TypeScript", icon: "typescript" },
  { name: "React", icon: "react" },
  { name: "Tailwind CSS", icon: "tailwindcss" },
  { name: "Bootstrap", icon: "bootstrap" },
  { name: "Next.js", icon: "nextdotjs" },
  { name: "Node.js", icon: "nodedotjs" },
  { name: "Express", icon: "express" },
  { name: "MySQL", icon: "mysql" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "React Native", icon: "reactnative" },
  { name: "Expo", icon: "expo" },
  { name: "SQLite", icon: "sqlite" },
  { name: "GitHub", icon: "github" },
  { name: "VS Code", icon: "visualstudiocode" },
  { name: "Figma", icon: "figma" },
  { name: "Canva", icon: "canva" },
  { name: "Postman", icon: "postman" },
  { name: "Gemini", icon: "googlegemini" },
  { name: "Groq", icon: "groq" },
  { name: "Anthropic", icon: "anthropic" },
  { name: "OpenAI", icon: "openai" },
];

function StackMarquee() {
  const { darkMode } = useDarkMode();

  const renderList = (copy) => (
    <div className="flex items-center gap-6 sm:gap-8 px-3">
      {STACKS.map((stack) => (
        <div
          key={`${stack.name}-${copy}`}
          className={`flex items-center gap-2.5 shrink-0 whitespace-nowrap ${
            darkMode ? "text-gray-300" : "text-gray-800"
          }`}
        >
          <span
            className={`flex items-center justify-center shrink-0 w-10 h-10 sm:w-15 sm:h-15  ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            <span className="block w-[55%] h-[55%]">
              <StackIcon name={stack.icon} />
            </span>
          </span>
        </div>
      ))}
    </div>
  );

  return (
    <div
      className={`marquee-container w-full overflow-hidden  ${
        darkMode
          ? "bg-[#131316] border-y border-gray-500/30"
          : "bg-gray-50 border-y border-gray-200"
      }`}
      aria-label="Tech stack marquee"
    >
      <div className="marquee-track flex w-max items-center">
        {renderList("a")}
        <div aria-hidden="true">{renderList("b")}</div>
      </div>
    </div>
  );
}

export default StackMarquee;
