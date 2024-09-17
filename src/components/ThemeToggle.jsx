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
    <button
      onClick={toggleTheme}
      className="p-2 w-10 h-10 bg-gray-200 dark:bg-gray-800 text-xl rounded-full flex items-center justify-center"
    >
      {theme === 'dark' ? '🌝' : '🌚'}
    </button>
  );
};
