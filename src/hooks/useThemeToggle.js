import React, { useEffect, useState } from "react";
import themes from "../styles/appTheme";

/**
 * useThemeToggle uses the json files in styles/themes and returns the entire theme.
 * Also adds keyboard shortcut to the app for changing the theme (pressing t).
 */
export function useThemeToggle() {
  const [currentTheme, setCurrentTheme] = useState(
    localStorage.getItem("theme") != null
      ? localStorage.getItem("theme")
      : themes.light.name
  );

  const toggleTheme = () => {
    setCurrentTheme((oldTheme) => {
      const themeArray = Object.keys(themes);
      const nextIndex = (themeArray.indexOf(oldTheme) + 1) % themeArray.length;
      return themeArray[nextIndex];
    });
  };

  const onKeyUp = (e) => {
    if (e.key.toUpperCase() === "T") {
      toggleTheme();
    }
  };

  useEffect(() => {
    document.addEventListener("keyup", onKeyUp);
    return () => {
      document.removeEventListener("keyUp", onKeyUp);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", currentTheme);
  }, [currentTheme]);

  return themes[currentTheme];
}
