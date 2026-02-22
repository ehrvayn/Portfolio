import { useDarkMode } from "../../context/DarkmodeProvider";

function Experience() {
  const { darkMode } = useDarkMode();
  return (
    <div className={`shadow-[0_0_6px_rgba(0,0,0,0.25)] p-6 rounded-lg ${darkMode ? "bg-[#1e1e1e] text-white" : "bg-white"}`}>
      <strong><i className="bi bi-person-workspace"></i> Experience</strong>
      <div className="flex flex-col mt-4 h-auto min-h-[250px] overflow-y-auto">

        {[
          { title: "BS Information System - 3rd Year", sub: "Naga College Foundation Inc.", year: "2026", active: true },
          { title: "OJT / Internship", sub: "Actively seeking", year: "Ongoing", active: false },
          { title: "Capstone Project Developer", sub: "Intelligent Queue Management System for Wait Transparency", year: "Ongoing", active: false },
        ].map((item, index) => (
          <div key={index} className="flex gap-4 relative">
            <div className="flex flex-col items-center">
              <div className={`w-3 h-3 rounded-full mt-1 ${item.active ? (darkMode ? "bg-[#4e4e4e]" : "bg-black") : "border-2 border-[#4e4e4e]"}`}></div>
              <div className={`${darkMode ? "bg-[#4e4e4e]" : "bg-gray-300"} w-[2px] flex-1`}></div>
            </div>
            <div className="flex justify-between w-full pb-6">
              <div>
                <strong>{item.title}</strong>
                <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>{item.sub}</p>
              </div>
              <span className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-400"}`}>{item.year}</span>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Experience;