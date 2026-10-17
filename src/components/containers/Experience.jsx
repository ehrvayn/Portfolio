import { useDarkMode } from "../../context/DarkmodeProvider";

function Experience() {
  const { darkMode } = useDarkMode();

  const startYear = 2022;

  const experiences = [
    {
      title: "BS Information System - 4th Year",
      sub: "Naga College Foundation Inc.",
      year: "2026",
      active: true,
    },
    {
      title: "OJT / Internship",
      sub: "Actively seeking",
      year: "2026",
      active: false,
    },
    {
      title: "Capstone UI/UX developer",
      sub: "Intelligent Queue Management System for Wait Transparency",
      year: "2026",
      active: false,
    },
    { title: "", sub: "", year: "", active: false },
  ];

  return (
    <div
      className={`flex flex-col p-6 flex-1 backdrop-blur-sm border ${
        darkMode
          ? "bg-[#17171a] border-gray-500/40 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
          : "bg-white border-gray-500/40 shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
      }`}
    >
      <div className="flex flex-col gap-4 flex-1 min-h-0">
        <div className="flex items-start justify-between shrink-0">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h2
                className={`text-lg uppercase font-bold tracking-tight ${
                  darkMode ? "text-gray-200" : "text-gray-900"
                }`}
              >
                Experience
              </h2>
            </div>
          </div>

          <div
            className={`flex justify-center items-center gap-2 px-3 py-2 rounded text-center shrink-0`}
          >
            <span
              className={`text-xs uppercase font-mono ${
                darkMode ? "text-gray-200" : "text-gray-900"
              }`}
            >
              Coding since
            </span>
            <span className="text-lg font-bold font-mono">{startYear}</span>
          </div>
        </div>

        <div className="flex flex-col p-1 overflow-y-auto flex-1 min-h-0 custom-scroll">
          <div className="relative">
            {experiences.map((item, index) => (
              <div key={index} className={`relative pl-6 py-3 `}>
                <div className="absolute -left-1 top-0 bottom-0 w-6 flex flex-col items-center">
                  {item.title && (
                    <>
                      <div
                        className={`w-3 h-3 rounded-full mt-4 shrink-0 ring-2 ${
                          item.active
                            ? darkMode
                              ? "bg-gray-300 ring-gray-500/30"
                              : "bg-gray-400 ring-gray-400/80"
                            : darkMode
                              ? " ring-gray-700/90"
                              : " ring-gray-600/30"
                        }`}
                      />
                      {index !== experiences.length - 1 && (
                        <div
                          className={`w-0.5 flex-1 -mb-4 ${
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
                          darkMode ? "text-gray-200" : "text-gray-900"
                        }`}
                      >
                        {item.title}
                      </h3>
                      <p
                        className={`text-xs font-mono leading-tight ${
                          darkMode ? "text-gray-200" : "text-gray-900"
                        }`}
                      >
                        {item.sub}
                      </p>
                    </div>

                    <div className="text-right shrink-0">
                      {item.active ? (
                        <span
                          className={`inline-block px-1.5 py-0.5 text-xs font-mono ${
                            darkMode
                              ? "bg-gray-500/25 text-gray-200"
                              : "bg-gray-300 text-black"
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
                                ? "text-gray-300"
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
