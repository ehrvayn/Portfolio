import { useDarkMode } from "../../context/DarkmodeProvider";

function Education() {
  const { darkMode } = useDarkMode();

  const data = [
    {
      title: "Senior High School - ICT",
      school: "Camarines Sur National High School",
      year: "2023",
    },
    {
      title: "Junior High School - BEP",
      school: "Camarines Sur National High School",
      year: "2021",
    },
    { title: "Elementary", school: "Sta Cruz Elementary School", year: "2016" },
  ];

  return (
    <div
      className={`flex flex-col flex-1 p-6 rounded-md overflow-hidden backdrop-blur-sm border ${
        darkMode
          ? "bg-[#0f0f0f] border-gray-800 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
          : "bg-white border-gray-200 shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
      }`}
    >
      <div className="flex flex-col gap-4">
        <div className="shrink-0">
          <div className="flex items-center gap-3 mb-1">
            <div
              className={`w-2 h-2 rounded-full ${
                darkMode ? "bg-emerald-400" : "bg-emerald-500"
              }`}
            />
            <h2
              className={`text-lg font-bold tracking-tight ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              Education
            </h2>
          </div>
          <p
            className={`text-xs tracking-widest uppercase font-mono ${
              darkMode ? "text-gray-500" : "text-gray-600"
            }`}
          >
            Academic Background
          </p>
        </div>

        <div className="flex flex-col px-1 overflow-y-auto custom-scroll">
          <div className="flex gap-3 relative">
            <div className="flex flex-col items-center">
              <div
                className={`w-3 h-3 rounded-full mt-4 ring-3 ${
                  darkMode
                    ? "bg-emerald-400 ring-emerald-400/30"
                    : "bg-emerald-500 ring-emerald-500/30"
                }`}
              />
              <div
                className={`w-0.5 flex-1 mt-1 ${
                  darkMode ? "bg-gray-700" : "bg-gray-300"
                }`}
              />
            </div>
            <div className="flex justify-between w-full pb-3">
              <div className="min-w-0">
                <h3
                  className={`font-bold text-xs mb-0.5 ${
                    darkMode ? "text-white" : "text-black"
                  }`}
                >
                  BS Information Systems 3rd-Year
                </h3>
                <p
                  className={`text-xs font-mono leading-tight ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Naga College Foundation Inc.
                </p>
              </div>
              <span
                className={`text-xs font-mono pl-3 shrink-0 ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                2026
              </span>
            </div>
          </div>

          {data.map((item, index) => (
            <div key={index} className="flex gap-3 relative">
              <div className="flex flex-col items-center">
                <div
                  className={`w-3 h-3 rounded-full mt-4 ring-3${
                    darkMode
                      ? "bg-gray-700 ring-gray-700/30"
                      : "bg-gray-300 ring-gray-300/30"
                  }`}
                />
                {index !== data.length - 1 && (
                  <div
                    className={`w-0.5 flex-1 mt-1 ${
                      darkMode ? "bg-gray-700" : "bg-gray-300"
                    }`}
                  />
                )}
              </div>
              <div
                className={`flex justify-between w-full ${index === data.length - 1 ? "pb-0" : "pb-3"}`}
              >
                <div className="min-w-0">
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
                    {item.school}
                  </p>
                </div>
                <span
                  className={`text-xs font-mono pl-3 shrink-0 ${
                    darkMode ? "text-gray-500" : "text-gray-500"
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
