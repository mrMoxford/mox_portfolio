import "./navbar.css";
import React, { useEffect, useState } from "react";
import index from "src/assets/index"
const {menuClose,menuOpen} = index

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  const handleHover = (e, value) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  let iterations = 0;
    const interval = setInterval(() => {
      e.target.innerText = e.target.innerText
        .split("")
        .map((item, index) =>
          index <= iterations
            ? value[index]
            : letters[Math.floor(Math.random() * letters.length)]
        )
        .join("");
      if (iterations >= value.length) {
        clearInterval(interval);
      }
      iterations += 1/2 ;
    }, 10);
  };

  return (
    <nav className="mox__profile-navbar | section__padding flex text-black">
      <div className="mox__profile-navbar_container | text-lg font-bold ">
        <div className="profileLogo">
          <p className="logo-type"><a href="#home"> MOX.DEV</a></p>
          </div>
        <ul className="nav-list">
          <li className="navLink first">
            <a  onMouseOver={(e)=> handleHover(e,'Home')} href="#home">HOME</a>
          </li>
          <li className="navLink second">
            <a onMouseOver={(e)=> handleHover(e,'About')} href="#about">ABOUT</a>
          </li>
          <li className="navLink third">
            <a onMouseOver={(e)=> handleHover(e,'projects')} href="#projects">PROJECTS</a>
          </li>
          <li className="navLink fourth">
            <a onMouseOver={(e)=> handleHover(e,'Contact')} href="#contact">CONTACT</a>
          </li>
        </ul>
      </div>
      <div className="mox__profile-navbar_menu">
        <img
        className="menu-open"
          src={menuClose}
          alt="menutoggle open"
          onClick={() => setMenuToggle(true)}
        />
      </div>
      {menuToggle && (
        <div className="mox__profile-navbar_menu-overlay">
          <img
            className="menu-close"
            src={menuOpen}
            alt="menutoggle closed"
            onClick={() => setMenuToggle(false)}
          />
          <ul className="nav-list toggle-nav">
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
        </div>
      )}
    </nav>
  );
};

export default Navbar;



{/* <div className="gpt3__navbar-menu">
        { toggleMenu === null && <RiMenu3Line
          className="menu__open"
          color="hsl(0 0% 100%)"
          size={27}
          onClick={() => {
            setToggleMenu("open");
          }}
        />}
        
        <div className={toggleMenu ? "gpt3__navbar-menu-toggle open" : "gpt3__navbar-menu-toggle"}>
          <RiCloseLine
            className="menu__close"
            color="hsl(0 0% 100%)"
            size={27}
            onClick={() => {
              setToggleMenu(null);
            }}
          />
          <Menu />
          <div className="gpt3__navbar-sign">
            <a className=" sing-in" href="/">
              Sign in
            </a>
            <button type="button" className="bg-accent text-white">
              Sign up
            </button>
            <div />
          </div>
        </div>
      </div> */}