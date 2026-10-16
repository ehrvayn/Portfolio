import { useDarkMode } from "../../context/DarkmodeProvider";

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
              className={`text-lg uppercase font-mono font-bold tracking-tight ${
                darkMode ? "text-gray-200" : "text-gray-900"
              }`}
            >
              Tech Stack
            </h2>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 overflow-y-auto sm:h-[450px] md:h-[450px] lg:h-[400px] xl:h-[300px] 2xl:h-[320px] custom-scroll pb-4 pr-2">
        {[
          {
            label: "Frontend",
            techs: [
              { name: "HTML" },
              { name: "CSS" },
              { name: "JavaScript" },
              { name: "TypeScript" },
              { name: "React" },
              { name: "Tailwind" },
              { name: "Bootstrap" },
              { name: "Next.js" },
            ],
          },
          {
            label: "Backend",
            techs: [
              { name: "Node.js" },
              { name: "MySQL" },
              { name: "PostgreSQL" },
              { name: "ExpressJS" },
            ],
          },
          {
            label: "Mobile",
            techs: [
              { name: "React Native" },
              { name: "Expo" },
              { name: "NativeWind" },
              { name: "SQLite" },
            ],
          },
          {
            label: "Tools",
            techs: [
              { name: "GitHub" },
              { name: "VSCode" },
              { name: "Figma" },
              { name: "Canva" },
              { name: "Postman" },
            ],
          },
          {
            label: "Security",
            techs: [
              { name: "JWT" },
              { name: "bcrypt" },
              { name: "OAuth" },
              { name: "Auth0" },
            ],
          },
          {
            label: "AI",
            techs: [
              { name: "Gemini" },
              { name: "Groq" },
              { name: "Anthropic" },
              { name: "OpenCode" },
              { name: "OpenAI" },

            ],
          },
          {
            label: "Cloud",
            techs: [{ name: "GCP" }],
          },
        ].map((section, i) => (
          <div key={i}>
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
              {section.techs.map((tech, index) => (
                <span
                  key={index}
                  className={` px-2 py-1 text-xs flex items-center gap-1 ${
                    darkMode
                      ? "bg-gray-500/10 hover:bg-gray-500/20 border border-gray-600/30 text-gray-200"
                      : "bg-gray-100 hover:bg-gray-200 border border-gray-300 text-gray-800"
                  }`}
                >
                  {tech.img && (
                    <img src={tech.img} className="w-3 h-3 object-contain" />
                  )}
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechStack;
