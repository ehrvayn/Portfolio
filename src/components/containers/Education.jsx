import { useDarkMode } from "../../context/DarkmodeProvider";

function Education() {
  const { darkMode } = useDarkMode();

  const data = [
    {
      title: "BS Information Systems",
      school: "Naga College Foundation Inc.",
      year: "2026",
      active: true,
    },
    {
      title: "Senior High School - ICT",
      school: "Camarines Sur National High School",
      year: "2023",
      active: false,
    },
    {
      title: "Junior High School - BEP",
      school: "Camarines Sur National High School",
      year: "2021",
      active: false,
    },
    {
      title: "Elementary",
      school: "Sta Cruz Elementary School",
      year: "2016",
      active: false,
    },
  ];

  return (
    <div
      className={`flex flex-col flex-1 min-h-0 p-6 backdrop-blur-sm border ${
        darkMode
          ? "bg-[#17171a] border-gray-500/40 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
          : "bg-white border-gray-500/40 shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
      }`}
    >
      <div className="flex flex-1 min-h-0 flex-col gap-4">
        <div className="shrink-0">
          <div className="flex items-center gap-3 mb-1">
            <h2
              className={`text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl  uppercase font-mono font-bold tracking-tight ${
                darkMode ? "text-gray-200" : "text-gray-900"
              }`}
            >
              Education
            </h2>
          </div>
        </div>

        <div className="relative flex flex-1 min-h-0 flex-col px-1 overflow-y-auto custom-scroll">
          {data.map((item, index) => (
            <div key={index} className={`relative pl-6 py-1 `}>
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
                    {index !== data.length - 1 && (
                      <div
                        className={`w-0.5 flex-1 -mb-4 ${
                          darkMode ? "bg-gray-700" : "bg-gray-300"
                        }`}
                      />
                    )}
                  </>
                )}
              </div>

              <div className="flex justify-between w-full">
                <div className="min-w-0">
                  <h3
                    className={`font-bold text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm 2xl:text-base mb-0.5 ${
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
                    {item.school}
                  </p>
                </div>
                <span
                  className={`text-xs font-mono pl-3 shrink-0 ${
                    darkMode ? "text-gray-200" : "text-gray-900"
                  }`}
                >
                  {item.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Education;
