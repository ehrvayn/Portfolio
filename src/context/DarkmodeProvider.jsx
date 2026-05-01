import { useContext, useState, createContext } from "react";

const DarkmodeContext = createContext();

export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(true);

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
