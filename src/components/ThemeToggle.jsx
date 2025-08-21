import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed top-20 right-6 z-50 p-3 rounded-full transition-all duration-500",
        "bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-xl",
        "border-2 border-primary/20 shadow-xl shadow-primary/10",
        "hover:scale-110 hover:shadow-2xl hover:shadow-primary/20",
        "hover:border-primary/40 focus:outline-none active:scale-95",
        "group"
      )}
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-400 drop-shadow-md transition-all duration-300 group-hover:rotate-12" />
      ) : (
        <Moon className="h-6 w-6 text-primary drop-shadow-md transition-all duration-300 group-hover:-rotate-12 group-hover:text-primary/80" />
      )}
    </button>
  );
};
