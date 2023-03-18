import "./navbar.css";
import React, { useState } from "react";
import menuClose from "../../assets/menuClose.png";
import menuOpen from "../../assets/menuOpen.png";
const Menu = () => (
  <ul className="nav-list">
    <li>
      <a href="#home">Home</a>
    </li>
    <li>
      <a href="#about">About</a>
    </li>
    <li>
      <a href="#projects">Projects</a>
    </li>
    <li>
      <a href="#contact">contact</a>
    </li>
  </ul>
);
const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  return (
    <nav className="mox__profile-navbar | section__padding flex text-black">
      <div className="mox__profile-navbar_container | text-lg font-bold ">
        <Menu />
      </div>
      <div className="mox__profile-navbar_menu">
        <img src={menuClose} alt="menutoggle close" onClick={() => setMenuToggle(true)} />
      </div>
      {menuToggle && (
        <div className="mox__profile-navbar_menu-overlay">
          <img src={menuOpen} alt="menutoggle close" onClick={() => setMenuToggle(false)} />
          <Menu />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
