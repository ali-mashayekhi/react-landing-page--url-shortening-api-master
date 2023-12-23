import logo from "../../assets/logo.svg";
import menu from "../../assets/menu.svg";

function Header() {
  return (
    <header>
      <div className="flex justify-between px-6 pb-5 pt-10 ">
        <a href="#">
          <img src={logo} alt="shortly logo" />
        </a>
        <div className="leading-none">
          <img className="h-6 w-7" src={menu} alt="menu icon" />
        </div>
      </div>
    </header>
  );
}

export default Header;
