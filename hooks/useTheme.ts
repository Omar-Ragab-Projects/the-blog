"use client";
import { useEffect, useState } from "react";

function getInitialTheme(): boolean {
  if (typeof window === "undefined") return false;
  if (localStorage.theme === "dark") return true;
  if (localStorage.theme === "light") return false;
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function useTheme() {
  const [isDark, setIsDark] = useState<boolean>(getInitialTheme);

  useEffect(() => {
    const htmlClassList = document.documentElement.classList;
    if (isDark) {
      htmlClassList.add("dark");
      htmlClassList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      htmlClassList.add("light");
      htmlClassList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return { isDark, setIsDark };
}

export default useTheme;
