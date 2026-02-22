import { useContext, useState } from "react";
import DarkmodeContext from "./DarkmodeContex";

export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <DarkmodeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkmodeContext.Provider>
  );
}

export function useDarkMode() {
  return useContext(DarkmodeContext);
}