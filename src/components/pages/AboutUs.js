import React from "react";
import Footer from "../Footer";
import "../pages/AboutUs.css";
import AboutUsText from "./AboutUsText";
import "../../App.css";
import "animate.css";
function AboutUs() {
  return (
    <>
      <div className="about-us-wrapper">
        <div className="animate_animated animate__fadeInUp">
          <h1 className="text">Om Oss</h1>
        </div>
        <div className="about-us-container">
          <div className="image-container flex justify-center">
            <img
              className="about-us-image size-80"
              src="images/Disc_3_Clean.png"
              alt="gps-banner"
              onClick={(event) =>
                window.open("https://www.twitch.tv/sergeantsatanlive", "_blank")
              }
            />
            <img
              className="about-us-image size-80"
              src="images/Jokkimsen.png"
              alt="gps-christmas"
              onClick={(event) =>
                window.open("https://www.twitch.tv/jokkimsen", "_blank")
              }
            />
          </div>

          <AboutUsText />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutUs;
