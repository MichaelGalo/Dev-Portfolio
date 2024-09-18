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


    // <button
    //   onClick={toggleTheme}
    //   className="p-1 w-6 h-6 bg-gray-200 dark:bg-gray-800 text-m rounded-full flex items-center justify-center content-center"
    // >
    //   {theme === 'dark' ? '🌝' : '🌚'}
    // </button>