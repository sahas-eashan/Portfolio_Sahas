import React from "react";
import { Sun, Moon } from "lucide-react";
import useTheme from "../hooks/useTheme";

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-gray-300/10 transition"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <Sun className="text-yellow-300" /> : <Moon className="text-gray-700" />}
    </button>
  );
}
