// // /* eslint-disable react/prop-types */
// // import  { createContext, useContext, useEffect, useState } from "react";

// // const ThemeContext = createContext();


// // export const ThemeProvider = ({ children }) => {
// //   const [isDarkMode, setIsDarkMode] = useState(false);


// //   useEffect(() => {
// //     if (isDarkMode) {
// //       document.documentElement.classList.add("dark");
// //     } else {
// //       document.documentElement.classList.remove("dark");
// //     }
// //   }, [isDarkMode]);

// //   const toggleTheme = () => {
// //     setIsDarkMode((prevMode) => !prevMode);
// //   };

// //   return (
// //     <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
// //       {children}
// //     </ThemeContext.Provider>
// //   );
// // };

// // export const useTheme = () => useContext(ThemeContext);


// import { createContext, useContext, useEffect, useState } from "react";

// // Create Theme Context
// const ThemeContext = createContext();

// export const ThemeProvider = ({ children }) => {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   useEffect(() => {
//     // Apply dark mode class to the HTML element
//     if (isDarkMode) {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   }, [isDarkMode]);

//   const toggleTheme = () => {
//     setIsDarkMode((prevMode) => !prevMode);
//   };

//   return (
//     <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// // Custom hook for ThemeContext
// export const useTheme = () => useContext(ThemeContext);


import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Persist theme in localStorage
    return localStorage.getItem("isDarkMode") === "true";
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("isDarkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("isDarkMode", "false");
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
