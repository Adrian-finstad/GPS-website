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
          <div class="footer-link-items text-xl space-y-3">
            <Link to="/AboutUs">Om oss</Link>
            <Link to="/Esport">Gathers, E-sport & community events</Link>
            <text className="text-white">Kontakt: gps.kontakt@hotmail.com</text>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/home">
              <img
                className="object-contain sm:h-48 h-32 w-36 sm:w-96"
                alt="gps-logo"
                src="images/logo.png"
              />
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
