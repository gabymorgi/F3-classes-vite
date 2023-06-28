import { createContext, useState } from "react";

export const ThemeContext = createContext();

function ThemeProvider(props) {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme")
      ? localStorage.getItem("theme")
      : "light"
  )

  function toggleTheme() {
    if (theme === "light") {
      setTheme("green")
    } else {
      if (theme === "green") {
        setTheme("dark")
      } else {
        setTheme("light")
      }
    }
  }

  const returnedValue = {
    value: theme,
    changeValue: toggleTheme,
  }

  return (
    <ThemeContext.Provider value={returnedValue}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
