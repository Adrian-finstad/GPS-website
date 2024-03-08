import React from "react";
import "./HeroSection.css";
import "../App.css";
import { Button } from "./Button";
function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/Streamvidutenstart.mp4" autoPlay loop muted />
      <div className="hero-text">
        <h1>VELKOMMEN TIL GPS!</h1>
        <h4>Er du klar til å bli med på moroa?</h4>
        <div className="hero-btns">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            OM OSS
          </Button>
          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
            onClick={console.log("hey")}
          >
            <a href="https://discord.gg/aER5PH3e" /> DISCORD{" "}
            <i className="fa-brands fa-discord" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
