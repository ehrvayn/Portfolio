import { useDarkMode } from "../../context/DarkmodeProvider";

function Education() {
  const { darkMode } = useDarkMode();

  const data = [
    { title: "Senior High School - ICT", school: "Camarines Sur National High School", year: "2023" },
    { title: "Junior High School - BEP", school: "Camarines Sur National High School", year: "2021" },
    { title: "Elementary", school: "Sta Cruz Elementary School", year: "2016" },
  ];

  const startYear = 2022;
  const currentYear = new Date().getFullYear();
  const yearsOfCoding = currentYear - startYear;

  return (
    <div className={`flex flex-col flex-1 shadow-[0_0_6px_rgba(0,0,0,0.25)] p-6 rounded-lg ${darkMode ? "bg-[#1e1e1e] text-white" : "bg-white"}`}>

      <div className="flex flex-wrap items-center gap-2 mb-4 shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-[4px] h-5 rounded-full bg-gradient-to-b from-gray-300 to-gray-500" />
          <strong className="text-base tracking-tight">
            <i className="bi bi-backpack-fill mr-1" /> Education
          </strong>
        </div>
        <div className={`flex-1 h-[1px] min-w-[20px] ${darkMode ? "bg-[#3e3e3e]" : "bg-gray-200"}`} />
        <div className="flex items-center gap-1">
          <span className="text-[10px] uppercase  font-mono font-semibold bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent">
            Coding Since
          </span>
          <span className="text-[12px] font-mono font-bold bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent">
            {startYear}
          </span>
          <span className={`text-[11px] font-mono ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
            · {yearsOfCoding}yrs
          </span>
        </div>
      </div>

      <div className="flex flex-col mt-2">
        <div className="flex gap-4 relative">
          <div className="flex flex-col items-center">
            <div className="w-3 h-3 rounded-full mt-1 shrink-0 bg-gradient-to-br from-gray-300 to-gray-500" />
            <div className={`w-[2px] flex-1 ${darkMode ? "bg-[#4e4e4e]" : "bg-gray-200"}`} />
          </div>
          <div className="flex justify-between w-full pb-6">
            <div>
              <strong className="text-sm">BS Information Systems 3rd-Year</strong>
              <p className={`text-[12px] font-mono ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                Naga College Foundation Inc.
              </p>
            </div>
            <span className={`text-[11px] font-mono pl-5 ${darkMode ? "text-white" : "text-black"}`}>
              2026
            </span>
          </div>
        </div>

        {data.map((item, index) => (
          <div key={index} className="flex gap-4 relative">
            <div className="flex flex-col items-center">
              <div className={`w-3 h-3 rounded-full border-2 mt-1 shrink-0 ${darkMode ? "border-[#4e4e4e]" : "border-gray-300"}`} />
              {index !== data.length - 1 && (
                <div className={`w-[2px] flex-1 ${darkMode ? "bg-[#4e4e4e]" : "bg-gray-200"}`} />
              )}
            </div>
            <div className={`flex justify-between w-full ${index === data.length - 1 ? "pb-0" : "pb-6"}`}>
              <div>
                <strong className="text-sm">{item.title}</strong>
                <p className={`text-[12px] font-mono ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                  {item.school}
                </p>
              </div>
              <span className={`text-[11px] font-mono pl-5 ${darkMode ? "text-gray-500" : "text-gray-400"}`}>
                {item.year}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;