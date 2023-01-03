import React from "react";
import IconBox from "./templates/IconBox";

const Header = () => {
  return (
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
        </header>
        <section className="hero-cta">
          <span className="cta-tagline">
            Fire protection solutions for All Your Needs
          </span>
          <h1>
            Fire Protection
            <br />
            At Your Fingertips
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            scelerisque lacinia diam eu eleifend. Phasellus nisi tortor, aliquam
            nec fringilla a, mattis et lorem. Etiam id mattis sem, vel convallis
            mauris.
          </p>
          <div className="cta-buttons">
            <button className="btn-solid">Industries We Serve</button>
            <button className="btn-outline">Schedule An Appointment</button>
          </div>
        </section>
        <section className="section">
          <div className="column">
            <div className="icon-box">
              <img src="assets/icon-1.svg" alt="Icon 1" />
              <h2>
                SUPERIOR
                <br />
                PROTECTION
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                scelerisque lacinia diam eu eleifend. Phasellus nisi tortor,
                aliquam nec fringilla a, mattis et lorem. Etiam id mattis sem,
                vel convallis mauris.
              </p>
              <button className="text-button">
                <img src="assets/square-plus.svg" className="square-plus" /> Get
                Started Today
              </button>
            </div>
          </div>
          <div className="column">
            <div className="icon-box">
              <img src="assets/icon-2.svg" alt="Icon 2" />
              <h2>
                Dependable
                <br />
                Repair services
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                scelerisque lacinia diam eu eleifend. Phasellus nisi tortor,
                aliquam nec fringilla a, mattis et lorem. Etiam id mattis sem,
                vel convallis mauris.
              </p>
              <button className="text-button">
                <img src="assets/square-plus.svg" className="square-plus" />
                View Our Services
              </button>
            </div>
          </div>
          <div className="column">
            <div className="icon-box">
              <img src="assets/icon-3.svg" alt="Icon 3" />
              <h2>
                Life Safety
                <br />
                Inspections
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                scelerisque lacinia diam eu eleifend. Phasellus nisi tortor,
                aliquam nec fringilla a, mattis et lorem. Etiam id mattis sem,
                vel convallis mauris.
              </p>
              <button className="text-button">
                <img src="assets/square-plus.svg" className="square-plus" />
                Schedule An Appointment
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Header;
