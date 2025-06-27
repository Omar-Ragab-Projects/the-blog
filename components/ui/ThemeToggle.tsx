import useTheme from "@/hooks/useTheme";
import Image from "next/image";
import React from "react";
import sun from "@/public/icons/sun.svg";
import moon from "@/public/icons/moon.svg";
import useMounted from "@/hooks/useMounted";

function ThemeToggle({
  isDark,
  setIsDark,
}: {
  isDark: boolean;
  setIsDark: (value: boolean) => void;
}) {
  const { mounted } = useMounted();

  function toggleTheme() {
    setIsDark(!isDark);
  }

  function ariaToggleTheme(e: React.KeyboardEvent<HTMLDivElement>) {
    if (e.key === "Enter" || e.key === " ") toggleTheme();
  }

  if (!mounted) return null; // Prevent SSR mismatch

  return (
    <div
      className="bg-foreground w-24 h-10 rounded-[29px] relative cursor-pointer"
      onClick={toggleTheme}
      role="button"
      aria-label="Toggle theme"
      tabIndex={0}
      onKeyDown={ariaToggleTheme}
    >
      <span
        className={`bg-background w-6 h-6 rounded-full position-y-center transition-5 transition-delay-2 ${
          isDark ? "left-4" : "translate-x-14"
        }`}
      ></span>
      <Image
        src={moon}
        alt="moon"
        className={`position-y-center left-14 ${
          isDark ? "animate-fadein" : "animate-fadeout"
        }`}
      />
      <Image
        src={sun}
        alt="sun"
        className={`position-y-center left-4 ${
          isDark ? "animate-fadeout" : "animate-fadein"
        }`}
      />
    </div>
  );
}

export default ThemeToggle;
