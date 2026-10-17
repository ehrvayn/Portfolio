import Container1 from "./components/Dividers/Container1";
import Container2 from "./components/Dividers/Container2";
import Container3 from "./components/Dividers/Container3";
import Container4 from "./components/Dividers/Container4";
import { useLayoutEffect } from "react";
import { useDarkMode } from "./context/DarkmodeProvider";
import ChatBot from "./components/ChatBot";
import StackMarquee from "./components/StackMarquee";
import StickyHeader from "./components/StickyHeader";
import { useRef } from "react";

function App() {
  const { darkMode } = useDarkMode();
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      <StickyHeader sentinelRef={heroRef} />
      <div
        className={`${darkMode ? "bg-[#0e0e11] text-gray-200" : "bg-white"} w-full min-h-screen flex flex-col gap-5 px-1 md:px-[100px] lg:px-[150px] xl:px-[180px] 2xl:px-[350px] py-6 md:py-8 lg:py-10`}
      >
        <div ref={heroRef}>
          <Container1 />
        </div>
        <StackMarquee />
        <Container2 />
        <div className="flex items-center w-full opacity-80">
          <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-gray-500/70" />
          <span className="px-4 text-[8px] lg:text-[10px] font-mono tracking-[0.4em] uppercase whitespace-nowrap text-gray-400">
            ITERATE. BUILD. DEPLOY.
          </span>
          <span className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-gray-500/70" />
        </div>
        <Container3 />
        <div className="flex items-center w-full opacity-80">
          <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-gray-500/70" />
          <span className="px-4 text-[8px] lg:text-[10px] font-mono tracking-[0.4em] uppercase whitespace-nowrap text-gray-400">
            RECOGNITION | SOCIALS
          </span>
          <span className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-gray-500/70" />
        </div>
        <Container4 />
        <ChatBot />

        <footer
          className={`mt-10 pt-6 border-t text-center text-[11px] font-mono 
            ${darkMode ? "border-[#333333] text-gray-300" : "border-gray-200 text-gray-900"}`}
        >
          © Ehrvayn Rayven P. Olivera | Personal Portfolio 2026
        </footer>
      </div>
    </>
  );
}

export default App;
