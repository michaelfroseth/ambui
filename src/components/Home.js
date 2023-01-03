import React from "react";
import Header from "./Header";

function Home() {
  return (
    <div>
      <Header />
      <div className="dark-callout">
        <div className="container">
          <section className="intro">
            <h2>Super SOAKING</h2>
            <h3>Fire Extinguishers</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              scelerisque lacinia diam eu eleifend. Phasellus nisi tortor,
              aliquam nec fringilla a, mattis et lorem. Etiam id mattis sem, vel
              convallis mauris.
            </p>
          </section>
          <section className="left-intro">
            <div className="column">
              <div className="featured-img">
                <img src="./assets/featured-img-1.jpg" alt="Test" />
              </div>
            </div>
            <div className="column">
              <div className="intro-content">
                <span className="tagline">Protection You Can Count On</span>
                <h2>
                  Keeping Your
                  <br />
                  Everything Safe
                </h2>
                <p>
                  Duis sit amet venenatis nisl. Nam non rhoncus nisl, et
                  suscipit sem. Vivamus condimentum lectus nec odio imperdiet
                  tristique. Suspendisse nibh arcu, malesuada vel placerat sit
                  amet, suscipit sit amet enim. Ut ac eleifend arcu.{" "}
                </p>
                <p>
                  <strong>
                    Morbi iaculis ligula vel est finibus, quis accumsan ligula
                    suscipit.
                  </strong>
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Home;
