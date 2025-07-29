import { useEffect, useState } from "react";
export default function useTheme() {
  const [theme, setTheme] = useState(localStorage.theme || "dark");
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.theme = theme;
  }, [theme]);
  return { theme, toggleTheme: () => setTheme(theme === "dark" ? "light" : "dark") };
}
