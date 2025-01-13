/* eslint-disable react/prop-types */
import  { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();


export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);


  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);