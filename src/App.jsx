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
        className={`${darkMode ? "bg-[#111111] text-white" : "bg-gray-50"} w-full h-full gap-5 flex flex-col px-4 md:px-[50px] lg:px-[70px] xl:px-[140px] py-6 md:py-8 lg:py-10`}
      >
        <Container1 />
        <Container2 />
        <Container3 />
        <Container4 />
        <ChatBot />

        <footer
          className={`mt-10 pt-6 border-t text-center text-[11px] font-mono 
            ${darkMode ? "border-[#333333] text-white" : "border-gray-200 text-black"}`}
        >
          Ehrvayn Rayven P. Olivera | Personal Portfolio 2026
        </footer>
      </div>
    </>
  );
}

export default App;
