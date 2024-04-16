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
              path="/GPS-god-jul"
            />
            <CardItem
              src="https://img.freepik.com/free-photo/halloween-background-with-scary-pumpkins-candles-graveyard-night-with-castle-background_123827-25820.jpg?t=st=1713184734~exp=1713188334~hmac=bb930944f8626e00f29259cc8dd1a2d1f571706bfb59deef8891a8f88ee30f5f&w=1380"
              text="Stig-Rune ble høstens vinner av vår 'spooky-contest'!"
              label="Aktuelt"
              path="/Spooky-contest-winner"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="https://img.freepik.com/free-photo/generative-ai-soldier-foreground-with-weapon-his-hand_1268-22189.jpg?t=st=1713184593~exp=1713188193~hmac=6b79be2f471d4b09668733cb79e2202e3ec416210527bfbc07700976693fe8f4&w=1380"
              text="GPS får nok et lag i årets GG-liga. Ønsk 'Kuler & Kaffe' masse lykke til!"
              label="E-sport"
              path="/Nytt-lag-cs-liga"
            />
            <CardItem
              src="images/cs2.png"
              text="CS2 har meldt sin ankomst, og det er mye nytt! Sjekk ut klipp fra Jokkimsen's nyeste stream."
              label="Klipp"
              path="/Cs2-er-her"
            />
            <CardItem
              src="images/Snart_live.png"
              text="GPS har egen e-sport kanal! Sjekk ut GPS-TTV."
              label="E-sport"
              path="/GPS-community-twitch"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
