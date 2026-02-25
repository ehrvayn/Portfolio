import { useDarkMode } from "../../context/DarkmodeProvider";

function Education() {
  const { darkMode } = useDarkMode();
  return (
    <div
      className={`shadow-[0_0_6px_rgba(0,0,0,0.25)] h-full p-6 rounded-lg ${darkMode ? "bg-[#1e1e1e] text-white" : "bg-white"}`}
    >
      <strong>
        <i className="bi bi-backpack-fill"></i> Education
      </strong>
      <div className="flex flex-col mt-4 h-[220px] overflow-y-auto">
        <div className="flex gap-4 relative">
          <div className="flex flex-col items-center">
            <div
              className={`w-3 h-3 rounded-full mt-1 ${darkMode ? "bg-[#4e4e4e]" : "bg-black"}`}
            ></div>
            <div
              className={`${darkMode ? "bg-[#4e4e4e]" : "bg-gray-300"} w-[2px] flex-1`}
            ></div>
          </div>
          <div className="flex justify-between w-full pb-6">
            <div>
              <strong>BS Information Systems 3rd-Year</strong>
              <p
                className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}
              >
                Naga College Foundation Inc.
              </p>
            </div>
            <span
              className={`lg:text-sm text-[12px] pl-5 ${darkMode ? "text-gray-400" : "text-gray-400"}`}
            >
              2026
            </span>
          </div>
        </div>

        {[
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
          {
            title: "Elementary",
            school: "Sta Cruz Elementary School",
            year: "2016",
          },
        ].map((item, index) => (
          <div key={index} className="flex gap-4 relative">
            <div className="flex flex-col items-center">
              <div
                className={`w-3 h-3 rounded-full border-2 border-[#4e4e4e] mt-1`}
              ></div>
              <div
                className={`${darkMode ? "bg-[#4e4e4e]" : "bg-gray-300"} w-[2px] flex-1`}
              ></div>
            </div>
            <div className="flex justify-between w-full pb-6">
              <div>
                <strong>{item.title}</strong>
                <p
                  className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}
                >
                  {item.school}
                </p>
              </div>
              <span
                className={`lg:text-sm text-[12px] pl-5 ${darkMode ? "text-gray-400" : "text-gray-400"}`}
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

export default Education;
