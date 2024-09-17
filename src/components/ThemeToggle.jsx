import { useState, useEffect } from "react";

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
    <button onClick={toggleTheme} className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full">
      {theme === 'dark' ? '🌝' : '🌚 '}
    </button>
  );
};

// TODO: 🌚🌝 My button won't turn into a full circle. 