import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Bli med over 300 andre flotte GPS'ere på moroa!
        </p>
        <p className="footer-subscription-text">
          Klikk her for å bli med i våres discord.
        </p>
        <div className="input-areas">
          <Link to="https://www.discord.gg/gps" target="_blank">
            <Button buttonStyle="btn--outline">
              GPS DISCORD
              <i className="fa-brands fa-discord" />
            </Button>
          </Link>
        </div>
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items text-xl">
            <Link to="/AboutUs">Om oss</Link>
            <Link to="/Esport">Gathers & community events</Link>
          </div>
          <div class="footer-link-items text-xl">
            <Link to="/ContactUs">Kontakt oss</Link>
            <Link to="/Esport">E-sport</Link>
            <Link to="/ContactUs">Sponsor</Link>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/home">
              <img className="object-contain h-48 w-96" src="images/logo.png" />
            </Link>
          </div>
          <small class="website-rights">GPS © 2024</small>
          <div class="social-icons">
            <Link
              class="social-icon-link facebook"
              to="https://www.facebook.com/Jokkimsen"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </Link>
            <Link
              class="social-icon-link twitch"
              to="https://www.twitch.tv/gpsttv"
              target="_blank"
              aria-label="Twitch"
            >
              <i class="fab fa-twitch" />
            </Link>
            <Link
              class="social-icon-link youtube"
              to="https://www.youtube.com/@gpscommunity"
              target="_blank"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" />
            </Link>
            <Link
              class="social-icon-link tiktok"
              to="https://www.tiktok.com/@gpsdiscord"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-tiktok" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
