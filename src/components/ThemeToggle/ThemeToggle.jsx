import { useState, useEffect } from "react";
import "./ThemeToggle.css";

export const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div>
    <input type="checkbox" className="checkbox" id="checkbox" />
    <label htmlFor="checkbox" className="checkbox-label"
    onClick={toggleTheme}>
      <i className="fas fa-moon">🌚</i>
      <i className="fas fa-sun">🌝</i>
      <span className="ball"></span>
    </label>
    </div>
  );
};

