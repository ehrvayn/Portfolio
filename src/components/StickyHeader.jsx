import { useEffect, useState } from "react";
import { useDarkMode } from "../context/DarkmodeProvider";
import ProfilePic from "../assets/img/originalProfilePicture.png";

function StickyHeader({ sentinelRef }) {
  const { darkMode } = useDarkMode();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0, rootMargin: "-64px 0px 0px 0px" },
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [sentinelRef]);

  return (
    <header
      aria-hidden={!visible}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"}
        ${darkMode ? "bg-[#0e0e11]/90 backdrop-blur-md border-b border-[#26262b]" : "bg-white/90 backdrop-blur-md border-b border-gray-200"}
      `}
    >
      <div className="px-4 md:px-[100px] lg:px-[150px] xl:px-[180px] 2xl:px-[350px]">
        <div className="flex items-center gap-2 py-2 md:py-4">
          <img className="w-auto h-7 sm:h-8 md:h-10" src={ProfilePic}/>
          <span
            className={`font-display text-sm sm:text-base md:text-base lg:text-lg xl:text-lg 2xl:text-xl tracking-tight
              ${darkMode ? "text-gray-200" : "text-gray-900"}
            `}
          >
            Ehrvayn Rayven Olivera | Portfolio
          </span>
        </div>
      </div>
    </header>
  );
}

export default StickyHeader;