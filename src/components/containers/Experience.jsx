import { useDarkMode } from "../../context/DarkmodeProvider";

function Experience() {
  const { darkMode } = useDarkMode();

  const startYear = 2022;
  const currentYear = new Date().getFullYear();
  const yearsOfCoding = currentYear - startYear;

  const experiences = [
    {
      title: "BS Information System - 3rd Year",
      sub: "Naga College Foundation Inc.",
      year: "2026",
      active: true,
    },
    {
      title: "OJT / Internship",
      sub: "Actively seeking",
      year: "Ongoing",
      active: false,
    },
    {
      title: "Capstone Project",
      sub: "Intelligent Queue Management System for Wait Transparency",
      year: "Ongoing",
      active: false,
    },
    { title: "", sub: "", year: "", active: false },

  ];

  return (
    <div
      className={`flex flex-col p-6 rounded-md overflow-hidden backdrop-blur-sm border ${
        darkMode
          ? "bg-[#0f0f0f] border-gray-800 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
          : "bg-white border-gray-200 shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
      }`}
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-start justify-between shrink-0">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <div
                className={`w-2 h-2 rounded-full ${
                  darkMode ? "bg-blue-400" : "bg-blue-500"
                }`}
              />
              <h2
                className={`text-lg font-bold tracking-tight ${
                  darkMode ? "text-white" : "text-black"
                }`}
              >
                Experience
              </h2>
            </div>
            <p
              className={`text-xs tracking-widest uppercase font-mono ${
                darkMode ? "text-gray-500" : "text-gray-600"
              }`}
            >
              Professional Journey
            </p>
          </div>

          <div
            className={`flex flex-col items-end gap-0.5 px-3 py-2 rounded text-center shrink-0 ${
              darkMode ? "bg-blue-500/10" : "bg-blue-50"
            }`}
          >
            <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {yearsOfCoding}+
            </span>
            <span
              className={`text-xs font-mono ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Years
            </span>
            <span
              className={`text-[9px] font-mono ${
                darkMode ? "text-gray-500" : "text-gray-500"
              }`}
            >
              Since {startYear}
            </span>
          </div>
        </div>

        <div className="flex flex-col p-1 overflow-y-auto max-h-[280px] custom-scroll">
          <div className="relative">
            {experiences.map((item, index) => (
              <div
                key={index}
                className={`relative pl-6 py-3 ${
                  item.active && item.title
                    ? darkMode
                      ? "bg-blue-500/5"
                      : "bg-blue-50/50"
                    : ""
                }`}
              >
                <div className="absolute left-0 top-0 bottom-0 flex flex-col items-center">
                  {item.title && (
                    <>
                      <div
                        className={`w-3 h-3 rounded-full mt-4 ring-3 ${
                          item.active
                            ? darkMode
                              ? "bg-blue-400 ring-blue-400/30"
                              : "bg-blue-500 ring-blue-500/30"
                            : darkMode
                              ? "bg-gray-700 ring-gray-700/30"
                              : "bg-gray-300 ring-gray-300/30"
                        }`}
                      />
                      {index !== experiences.length - 1 && (
                        <div
                          className={`w-0.5 flex-1 mt-1 ${
                            darkMode ? "bg-gray-700" : "bg-gray-300"
                          }`}
                        />
                      )}
                    </>
                  )}
                </div>

                {item.title && (
                  <div className="flex justify-between items-start gap-3">
                    <div className="flex-1 min-w-0">
                      <h3
                        className={`font-bold text-xs mb-0.5 ${
                          darkMode ? "text-white" : "text-black"
                        }`}
                      >
                        {item.title}
                      </h3>
                      <p
                        className={`text-xs font-mono leading-tight ${
                          darkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {item.sub}
                      </p>
                    </div>

                    <div className="text-right shrink-0">
                      {item.active ? (
                        <span
                          className={`inline-block px-1.5 py-0.5 text-xs font-mono rounded ${
                            darkMode
                              ? "bg-blue-500/20 text-blue-300"
                              : "bg-blue-100 text-blue-700"
                          }`}
                        >
                          Current
                        </span>
                      ) : (
                        <span
                          className={`text-xs font-mono ${
                            item.year === "Ongoing"
                              ? darkMode
                                ? "text-gray-500"
                                : "text-gray-500"
                              : darkMode
                                ? "text-gray-400"
                                : "text-gray-600"
                          }`}
                        >
                          {item.year}
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
