import StackIcon from "../StackIcon";
import { useDarkMode } from "../../context/DarkmodeProvider";

const SECTIONS = [
  {
    label: "Frontend",
    techs: [
      { name: "HTML", icon: "html5" },
      { name: "CSS", icon: "css3" },
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
      { name: "React", icon: "react" },
      { name: "Tailwind", icon: "tailwindcss" },
      { name: "Bootstrap", icon: "bootstrap" },
      { name: "Next.js", icon: "nextdotjs" },
    ],
  },
  {
    label: "Backend",
    techs: [
      { name: "Node.js", icon: "nodedotjs" },
      { name: "MySQL", icon: "mysql" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "ExpressJS", icon: "express" },
    ],
  },
  {
    label: "Mobile",
    techs: [
      { name: "React Native", icon: "reactnative" },
      { name: "Expo", icon: "expo" },
      { name: "NativeWind", icon: "nativewind" },
      { name: "SQLite", icon: "sqlite" },
    ],
  },
  {
    label: "Tools",
    techs: [
      { name: "GitHub", icon: "github" },
      { name: "VSCode", icon: "visualstudiocode" },
      { name: "Figma", icon: "figma" },
      { name: "Canva", icon: "canva" },
      { name: "Postman", icon: "postman" },
    ],
  },
  {
    label: "Security",
    techs: [
      { name: "JWT", icon: "jsonwebtokens" },
      { name: "bcrypt", icon: "bcrypt" },
      { name: "OAuth", icon: "oauth" },
      { name: "Auth0", icon: "auth0" },
    ],
  },
  {
    label: "AI",
    techs: [
      { name: "Gemini", icon: "googlegemini" },
      { name: "Groq", icon: "groq" },
      { name: "Anthropic", icon: "anthropic" },
      { name: "OpenCode", icon: "opencode" },
      { name: "OpenAI", icon: "openai" },
    ],
  },
  {
    label: "Cloud",
    techs: [{ name: "GCP", icon: "googlecloud" }],
  },
];

function TechStack() {
  const { darkMode } = useDarkMode();

  return (
    <div
      className={`p-6 flex-1 min-h-0 backdrop-blur-sm border flex flex-col ${
        darkMode
          ? "bg-[#17171a] border-gray-500/40 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
          : "bg-white border-gray-500/40 shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
      }`}
    >
      <div className="flex flex-col mb-0 md:mb-[20px] gap-4 shrink-0 mb-3">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <h2
              className={`text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl  uppercase font-mono font-bold tracking-tight ${
                darkMode ? "text-gray-200" : "text-gray-900"
              }`}
            >
              Tech Stack
            </h2>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 overflow-y-auto sm:h-[450px] md:h-[450px] lg:h-[430px] xl:h-[300px] 2xl:h-[320px] custom-scroll pb-4 pr-2">
        {SECTIONS.map((section) => (
          <div key={section.label}>
            <div className="flex items-center gap-2 mb-2">
              <span
                className={`text-[9px] uppercase tracking-[0.15em] font-mono font-semibold ${
                  darkMode ? "text-gray-200" : "text-gray-900"
                }`}
              >
                {section.label}
              </span>
              <div
                className={`flex-1 h-[1px] ${
                  darkMode ? "bg-white" : "bg-black"
                } opacity-20`}
              />
            </div>

            <div className="flex flex-wrap gap-1.5">
              {section.techs.map((tech) => (
                <div
                  key={tech.name}
                  className="group flex flex-col items-center gap-1 w-[58px] sm:w-[64px]"
                  title={tech.name}
                >
                  <div
                    className={`w-full aspect-square flex items-center justify-center p-1.5 border transition-colors ${
                      darkMode
                        ? "bg-gray-500/10 hover:bg-gray-500/20 border-gray-600/30 text-white"
                        : "bg-gray-100 hover:bg-gray-200 border-gray-300 text-black"
                    }`}
                  >
                    <StackIcon name={tech.icon} />
                  </div>
                  <span
                    className={`w-full truncate text-center text-[12px] leading-tight font-mono uppercase tracking-tight ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechStack;
