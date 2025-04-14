import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "black" : "light"));
  };
  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme, setTheme, setUsername, setEmail }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
