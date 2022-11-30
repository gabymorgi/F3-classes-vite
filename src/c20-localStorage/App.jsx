import React from "react";
import './App.css';
import { TheBag } from "./TheBag";

const App = () => {
  //get theme from local storage
  const theme = sessionStorage.getItem("theme");
  //set theme to light if there is no theme in local storage
  const [currentTheme, setCurrentTheme] = React.useState(theme || "light");

  const toggleTheme = () => {
    //if current theme is light, set theme to dark
    if (currentTheme === "light") {
      setCurrentTheme("dark");
      sessionStorage.setItem("theme", "dark");
    } else {
      //if current theme is dark, set theme to light
      setCurrentTheme("light");
      sessionStorage.setItem("theme", "light");
    }
  };

  return (
    <div className={theme || 'light'}>
      <h1>Local Storage</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <TheBag />
    </div>
  );
};

export default App;
