import Account from "./Account/Account";
import Links from "./Links/Links";
import Logo from "./Logo/Logo";
import Search from "./Search/Search";
import Hamburger from "hamburger-react";
import "./NavBar.css";

const NavBar = () => {
  const handleHamClick = () => {
    let mobileExpandedMenu = document.querySelector(".mobile-expanded-menu");
    mobileExpandedMenu.classList.toggle("mobile-expanded");
  };
  return (
    <div className="sub-container nav-main">
      <div className="nav-container">
        <Logo></Logo>
        <button className="hamburger" onClick={handleHamClick}>
          <Hamburger size={20} color="#fff"></Hamburger>
        </button>
        <span className="desktop-links">
          <Links></Links>
        </span>
        {/* <Search></Search> */}
        <Account></Account>
      </div>
      <div className="nav-mobile">
        <div className="mobile-expanded-menu">
          <Links></Links>
          <Account></Account>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
