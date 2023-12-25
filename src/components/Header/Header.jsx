import { useState } from "react";
import logo from "../../assets/logo.svg";
import menu from "../../assets/menu.svg";
import Menu from "./Menu";
import Navigation from "./Navigation";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    setShowMenu((previousState) => !previousState);
  }

  return (
    <header className="relative">
      <div className="lg  mx-auto flex max-w-6xl justify-between px-6 pb-5 pt-10 sm:justify-normal sm:gap-10 sm:px-6 sm:pb-[4.75rem] sm:pt-12">
        <a href="#">
          <img src={logo} alt="shortly logo" />
        </a>
        <Navigation />
        <div className="leading-none sm:hidden" onClick={toggleMenu}>
          <img className="h-6 w-7" src={menu} alt="menu icon" />
        </div>

        {showMenu && <Menu />}
      </div>
    </header>
  );
}

export default Header;
