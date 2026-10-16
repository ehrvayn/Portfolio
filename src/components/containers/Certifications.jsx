import { useState } from "react";
import JSCert from "../../assets/img/JSCertificate.png";
import DL1stSem from "../../assets/img/DL-1stSem.jpg";
import DL2ndSem from "../../assets/img/DL-2ndSem.jpg";
import responsiveCert from "../../assets/img/ResponsiveCert.png";
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
      className={`${
        darkMode
          ? "bg-[#17171a] border-gray-500/40 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
          : "bg-white border-gray-500/40 shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
      } w-full flex-1 min-h-0 shadow-[0_0_6px_rgba(0,0,0,0.25)] border  p-6 flex flex-col gap-4`}
    >
      <div className="flex items-center gap-2 shrink-0">
        <strong className="text-base uppercase font-mono tracking-tight">Certifications</strong>
      </div>

      <div className="flex flex-col p-2 gap-3 max-h-[214px] overflow-y-auto ">
        {certifications.map((cert, index) => (
          <div
            onClick={() => setSelectedImg(cert.img)}
            key={index}
            className={`cursor-pointer p-4 pr-10 relative border ${
              darkMode
                ? "bg-gray-500/10 hover:bg-gray-500/20 border border-gray-600/30 text-gray-200"
                : "bg-gray-500/10 hover:bg-gray-500/20 border border-gray-600/30 text-gray-800"
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
