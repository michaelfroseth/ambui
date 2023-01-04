import React, { useState, useEffect } from "react";
import HeroCTA from "./templates/HeroCTA";
import IconBox from "./templates/IconBox";
import Nav from "./templates/Nav";
import { Parallax } from "react-parallax";

const Header = () => {
  const [showMenuBar, setShowMenuBar] = useState(false);
  const [menuBarAnimationClass, setMenuBarAnimationClass] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      // Check if user has scrolled past the point where you want to show the mobile menu bar
      if (window.scrollY > 50) {
        setShowMenuBar(true);
        setMenuBarAnimationClass("slide-in-top");
      } else {
        setShowMenuBar(false);
        setMenuBarAnimationClass("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Parallax bgImage="./assets/dark-bg.jpg" strength={400}>
      <div className="home-hero">
        {showMenuBar && (
          <div className={`mobile-menu-bar ${menuBarAnimationClass}`}>
            <div className="logo">
              <a href="/">
                <img
                  src="./assets/ambition-logo-white-alt.png"
                  width="320px"
                  alt="Ambition Fire Protection"
                />
              </a>
            </div>
            <div className="hamburger-icon">
              <a href="#">
                <img src="./assets/hamburger.svg" alt="Hamburger icon" />
              </a>
            </div>
          </div>
        )}
        <div className="container">
          <header className="header">
            <div className="logo">
              <a href="/">
                <img
                  src="./assets/ambition-logo-white-alt.png"
                  alt="Ambition Fire Protection"
                  width="380px"
                />
              </a>
            </div>
            <Nav />
          </header>
          <HeroCTA />
          <IconBox />
        </div>
      </div>
    </Parallax>
  );
};

export default Header;
