import { useState } from "react";
import profilePic from "../../assets/img/profile.jpg";
import DL1stSem from "../../assets/img/DL-1stSem.jpg";
import DL2ndSem from "../../assets/img/DL-2ndSem.jpg";
import { useDarkMode } from "../../context/DarkmodeProvider";

function Certifications() {
  const [selectedImg, setSelectedImg] = useState(null);
  const { darkMode } = useDarkMode();

  const certifications = [
    {
      name: "2023-2024 Dean's Lister Second Semester",
      issuer: "Naga College Foundation Inc.",
      img: DL2ndSem,
    },
    {
      name: "2023-2024 Dean's Lister First Semester",
      issuer: "Naga College Foundation Inc.",
      img: DL1stSem,
    },
    { name: "", issuer: "", img: null },
    { name: "", issuer: "", img: null },
  ];

  return (
    <div
      className={`${darkMode ? "bg-[#1e1e1e] text-white" : "bg-white"} flex-1 shadow-[0_0_6px_rgba(0,0,0,0.25)] p-6 rounded-lg flex flex-col gap-4`}
    >
      <strong>
        <i className="bi bi-files"></i> Certifications
      </strong>
      <div className="flex flex-col p-2 gap-3 h-[250px] overflow-y-auto">
        {certifications.map((cert, index) => (
          <div
            onClick={() => setSelectedImg(cert.img)}
            key={index}
            className={`${darkMode ? "bg-[#3e3e3e]" : "border-gray-200 shadow-[0_0_3px_rgba(0,0,0,0.25)]"} cursor-pointer rounded-lg p-4 pr-10 relative`}
          >
            <strong className="text-sm">{cert.name}</strong>
            <p
              className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}
            >
              {cert.issuer}
            </p>

            {cert.img && (
              <button
                title="View Certificate"
                className="absolute top-3 right-3 pl-10 text-gray-400 cursor-pointer text-lg"
              >
                <i className="bi bi-arrows-angle-expand"></i>
              </button>
            )}
          </div>
        ))}
      </div>

      {selectedImg && (
        <div
          onClick={() => setSelectedImg(null)}
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
        >
          <img
            src={selectedImg}
            className="w-[80%] h-[80%] object-contain rounded-lg"
          />
        </div>
      )}
    </div>
  );
}

export default Certifications;
