import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1 className="text-white text-3xl antialiased underline underline-offset-4">
        Siste nytt
      </h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/GPS_christmas_banner.png"
              text="Fra alle oss i GPS-ledelsen, god jul til dere alle!"
              label="Aktuelt"
              path="/services"
            />
            <CardItem
              src="images/hansen.svg"
              text="Stig-Rune ble høstens vinner av vår 'spooky-contest'!"
              label="Aktuelt"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/GPS_banner_vanlig.png"
              text="GPS får nok et lag i årets GG-liga. Ønsk 'Kuler & Kaffe' masse lykke til!"
              label="E-sport"
              path="/services"
            />
            <CardItem
              src="images/cs2.png"
              text="CS2 har meldt sin ankomst, og det er mye nytt! Sjekk ut klipp fra Jokkimsen's nyeste stream."
              label="Klipp"
              path="/products"
            />
            <CardItem
              src="images/Snart_live.png"
              text="GPS har egen e-sport kanal! Sjekk ut GPS-TTV."
              label="E-sport"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
