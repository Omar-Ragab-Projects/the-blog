"use client";
import React, { useEffect, useState } from "react";
import closeIcon from "@/public/icons/closeIcon.svg";
import ThemeToggle from "./ui/ThemeToggle";
import BurgerMenu from "./ui/BurgerMenu";
import { navLinks } from "@/lib/constants";
import Link from "next/link";
import Image from "next/image";
import useTheme from "@/hooks/useTheme";
import Logo from "./ui/Logo";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuHasOpened, setMenuHasOpened] = useState(false);
  const { isDark, setIsDark } = useTheme();

  useEffect(() => {
    if (isMenuOpen) setMenuHasOpened(true);
  }, [isMenuOpen]);

  const navList = navLinks.map((link, idx) => (
    <li key={idx}>
      <Link href={link.path} className="text-lg p-2 block text-center">
        {link.name}
      </Link>
    </li>
  ));

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      {/* Mobile Nav */}
      <nav
        className={`md:hidden flex-center flex-col gap-14 py-[18px] px-[20px] xl:px-0 bg-background fixed z-20 right-0 top-0 h-full ${
          isMenuOpen
            ? "animate-openRight"
            : menuHasOpened
            ? "animate-closeRight"
            : "hidden"
        }`}
      >
        <Logo />

        <div className={`flex items-center justify-center flex-col gap-5`}>
          <ul className="flex gap-[14px] flex-col">{navList}</ul>
          <ThemeToggle isDark={isDark} setIsDark={setIsDark} />
        </div>

        <Image
          src={closeIcon}
          alt={"CLose Menu"}
          className={`w-8 h-8 invert-100 dark:invert-0 absolute bottom-5 position-x-center text-background cursor-pointer  ${
            isMenuOpen ? "animate-rotateIn" : "animate-rotateOut"
          }`}
          onClick={toggleMenu}
        />
      </nav>
      <nav
        className={`md:hidden flex-between py-[18px] px-[20px] xl:px-0 mt-[30px] sticky top-0 bg-background z-10
        ${isMenuOpen ? "opacity-0" : ""}`}
      >
        <Logo />

        <BurgerMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </nav>

      {/* Desktop Nav */}
      <nav className="hidden md:flex-between py-[18px] px-[20px] xl:px-0 mt-[30px] sticky top-0 bg-background z-10">
        <Logo />

        <div className="flex gap-[14px] items-center">
          <ul className="flex gap-[14px]">{navList}</ul>
          <ThemeToggle isDark={isDark} setIsDark={setIsDark} />
        </div>
      </nav>
    </>
  );
}

export default NavBar;
