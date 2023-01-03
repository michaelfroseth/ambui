import React from "react";

const IconBox = () => {
  return (
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
            scelerisque lacinia diam eu eleifend. Phasellus nisi tortor, aliquam
            nec fringilla a, mattis et lorem. Etiam id mattis sem, vel convallis
            mauris.
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
            scelerisque lacinia diam eu eleifend. Phasellus nisi tortor, aliquam
            nec fringilla a, mattis et lorem. Etiam id mattis sem, vel convallis
            mauris.
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
            scelerisque lacinia diam eu eleifend. Phasellus nisi tortor, aliquam
            nec fringilla a, mattis et lorem. Etiam id mattis sem, vel convallis
            mauris.
          </p>
          <button className="text-button">
            <img src="assets/square-plus.svg" className="square-plus" />
            Schedule An Appointment
          </button>
        </div>
      </div>
    </section>
  );
};

export default IconBox;
