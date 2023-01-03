import React from "react";
import HeroCTA from "./templates/HeroCTA";
import IconBox from "./templates/IconBox";
import Nav from "./templates/Nav";
import { Parallax } from "react-parallax";

const Header = () => {
  return (
    <Parallax bgImage="./assets/dark-bg.jpg" strength={400}>
      <div className="home-hero">
        <div className="container">
          <header className="header">
            <div className="logo">
              <a href="/">
                <img
                  src="./assets/ambition-logo-white.svg"
                  alt="Ambition Fire Protection"
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
