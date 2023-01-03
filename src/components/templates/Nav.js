import React from "react";

const Nav = () => {
  return (
    <nav>
      <ul className="nav amb-menu">
        <li className="nav-item">
          <a className="nav-link" href="/">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">
            About Us
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/services">
            Services
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/industries">
            Industries
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/contact">
            Contact Us
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
