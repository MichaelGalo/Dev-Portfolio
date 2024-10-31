import { useState, useEffect } from "react";
import "./ThemeToggle.css";
import { IconMoon, IconSun } from "@tabler/icons-react";

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
      <i className="fas fa-moon"><IconMoon size={16} /></i>
      <i className="fas fa-sun"><IconSun size={16} /></i>
      <span className="ball"></span>
    </label>
    </div>
  );
};

