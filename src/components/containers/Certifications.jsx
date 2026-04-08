import { useState } from "react";
import JSCert from "../../assets/img/JSCertificate.png";
import DL1stSem from "../../assets/img/DL-1stSem.jpg";
import DL2ndSem from "../../assets/img/DL-2ndSem.jpg";
import responsiveCert from "../../assets/img/ResponsiveCert.png"
import { useDarkMode } from "../../context/DarkmodeProvider";

function Certifications() {
  const [selectedImg, setSelectedImg] = useState(null);
  const { darkMode } = useDarkMode();

  const certifications = [
    {
      name: "JavaScript Developer Certification 2026",
      issuer: "freeCodeCamp",
      img: JSCert,
    },
    {
      name: "Responsive Web Design Developer Certification 2026",
      issuer: "freeCodeCamp",
      img: responsiveCert,
    },
    {
      name: "Dean's Lister 2nd Semester 2023-2024",
      issuer: "Naga College Foundation Inc.",
      img: DL2ndSem,
    },
    {
      name: "Dean's Lister 1st Semester 2023-2024",
      issuer: "Naga College Foundation Inc.",
      img: DL1stSem,
    },
  ];

  return (
    <div
      className={`${darkMode ? "bg-[#1e1e1e] text-white" : "bg-white"} flex-1 shadow-[0_0_6px_rgba(0,0,0,0.25)] p-6 rounded-sm flex flex-col gap-4`}
    >
      <div className="flex items-center gap-2">
        <div className="w-[4px] h-5 rounded-full bg-gradient-to-b from-gray-300 to-gray-500" />
        <strong className="text-base tracking-tight">
          <i className="bi bi-files mr-1" /> Certifications
        </strong>
      </div>

      <div className="flex flex-col p-2 gap-3 h-50 overflow-y-auto">
        {certifications.map((cert, index) => (
          <div
            onClick={() => setSelectedImg(cert.img)}
            key={index}
            className={`cursor-pointer rounded-lg p-4 pr-10 relative transition-all duration-200 ${
                            darkMode
                ? "bg-[#2e2e2e] border border-[#3e3e3e] hover:border-red-500"
                : "bg-gray-50 border border-gray-200 hover:border-red-300"
            }`}
          >
            <strong className="text-sm">{cert.name}</strong>
            <p
              className={`text-[12px] font-mono ${darkMode ? "text-gray-400" : "text-gray-500"}`}
            >
              {cert.issuer}
            </p>
            {cert.img && (
              <button
                title="View Certificate"
                className="absolute top-3 right-3 text-gray-400 cursor-pointer text-lg"
              >
                <i className="bi bi-arrows-angle-expand" />
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
