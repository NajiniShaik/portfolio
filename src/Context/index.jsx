
import { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

export const dataContext = createContext();

export const DataProvider = ({ children }) => {
  const [theme, updateTheme] = useState("light");

  // Initialize login state from cookie
  const [isLoggedIn, updateAccState] = useState(() => {
    return !!Cookies.get("loggedInUser");
  });

  // Optional: persist theme in localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) updateTheme(savedTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <dataContext.Provider value={{ theme, updateTheme, isLoggedIn, updateAccState }}>
      {children}
    </dataContext.Provider>
  );
};
