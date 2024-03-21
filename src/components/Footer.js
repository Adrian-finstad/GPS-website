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
          <div class="footer-link-items">
            <h2>Om oss</h2>
            <Link to="/sign-up">Admingruppa</Link>
            <Link to="/">Jokkimsen & Sgt.Satan</Link>
            <Link to="/">Gathers</Link>
            <Link to="/">Community-events</Link>
            <Link to="/">Vår visjon</Link>
          </div>
          <div class="footer-link-items">
            <h2>Kontakt oss</h2>
            <Link to="/">Kontaktinformasjon</Link>
            <Link to="/">Teknisk/Web-Support</Link>
            <Link to="/">E-sport</Link>
            <Link to="/">Sponsor</Link>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/home">
              <img src="images/logo.png" alt="logo" height="100px" />
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
