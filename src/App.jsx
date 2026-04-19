import "./assets/styles/App.css";
import Container1 from "./components/Dividers/Container1";
import Container2 from "./components/Dividers/Container2";
import Container3 from "./components/Dividers/Container3";
import Container4 from "./components/Dividers/Container4";
import { useEffect } from "react";
import { useDarkMode } from "./context/DarkmodeProvider";
import ChatBot from "./components/ChatBot";

function App() {
  const { darkMode } = useDarkMode();

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      <div
        className={`${darkMode ? "bg-[#111111] text-white" : "bg-gray-50"} transition-colors duration-500 w-full h-full gap-5 flex flex-col px-1 md:px-[100px] lg:px-[130px] xl:px-[150px] py-6 md:py-8 lg:py-10`}
      >
        <Container1 />
        <Container2 />
        <div className="flex items-center w-full max-w-5xl mx-auto opacity-80">
          <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-orange-500/50" />
          <span className="px-4 text-[8px] lg:text-[10px] font-mono tracking-[0.4em] uppercase whitespace-nowrap text-orange-500">
            ITERATE. BUILD. DEPLOY.
          </span>
          <span className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-orange-500/50" />
        </div>
        <Container3 />
        <div className="flex items-center w-full max-w-5xl mx-auto opacity-80">
          <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-orange-500/50" />
          <span className="px-4 text-[8px] lg:text-[10px] font-mono tracking-[0.4em] uppercase whitespace-nowrap text-orange-500">
            RECOGNITION | SOCIALS
          </span>
          <span className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-orange-500/50" />
        </div>
        <Container4 />
        <ChatBot />

        <footer
          className={`mt-10 pt-6 border-t text-center text-[11px] font-mono 
            ${darkMode ? "border-[#333333] text-white" : "border-gray-200 text-black"}`}
        >
          © Ehrvayn Rayven P. Olivera | Personal Portfolio 2026
        </footer>
      </div>
    </>
  );
}

export default App;
