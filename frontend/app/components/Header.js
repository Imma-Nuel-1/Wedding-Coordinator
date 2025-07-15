"use client";
import { useTheme } from "./ThemeProvider";
import { FaMoon, FaSun, FaHeart } from "react-icons/fa";

export default function Header() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="bg-white dark:bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <FaHeart className="text-primary-600 text-2xl mr-2" />
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Wedding Coordinators
            </h1>
          </div>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <FaSun className="text-yellow-500 text-xl" />
            ) : (
              <FaMoon className="text-gray-600 text-xl" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
