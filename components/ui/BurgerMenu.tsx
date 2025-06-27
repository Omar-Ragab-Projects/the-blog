import React from "react";

function BurgerMenu({
  isMenuOpen,
  setIsMenuOpen,
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <div
      onClick={toggleMenu}
      className="flex flex-col items-center gap-1 w-6 cursor-pointer [&>*]:w-full [&>*]:h-[2px] [&>*]:bg-foreground [&>*]:rounded-xl
        "
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

export default BurgerMenu;
