import { useDarkMode } from "../../context/DarkmodeProvider";

function Experience() {
  const { darkMode } = useDarkMode();

  return (
    <div
      className={`shadow-[0_0_6px_rgba(0,0,0,0.25)] h-[420px] overflow-auto p-6 rounded-lg ${darkMode ? "bg-[#1e1e1e] text-white" : "bg-white"}`}
    >
      <div className="flex flex-1 items-center gap-2 mb-4">
        <div className="w-[4px] h-5 rounded-full bg-gradient-to-b from-gray-300 to-gray-500" />
        <strong className="text-base tracking-tight">
          <i className="bi bi-person-workspace mr-1" /> Experience
        </strong>
      </div>

      <div className="flex flex-col">
        {[
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
          { title: "", sub: "", year: "", active: false },
          { title: "", sub: "", year: "", active: false },
          { title: "", sub: "", year: "", active: false },
        ].map((item, index) => (
          <div key={index} className="flex gap-4 relative">
            <div className="flex flex-col items-center">
              <div
                className={`w-3 h-3 rounded-full mt-1 ${item.active ? "bg-gradient-to-br from-gray-300 to-gray-500" : `border-2 ${darkMode ? "border-[#4e4e4e]" : "border-gray-300"}`}`}
              />
              <div
                className={`w-[2px] flex-1 ${darkMode ? "bg-[#4e4e4e]" : "bg-gray-200"}`}
              />
            </div>
            <div className="flex justify-between w-full pb-6">
              <div>
                <strong className="text-sm">{item.title}</strong>
                <p
                  className={`text-[12px] font-mono ${darkMode ? "text-gray-400" : "text-gray-500"}`}
                >
                  {item.sub}
                </p>
              </div>
              <span
                className={`text-[11px] font-mono pl-5 ${item.year === "Ongoing" ? "text-gray-500" : darkMode ? "text-white" : "text-black"}`}
              >
                {item.year}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
