import React from "react";
import { Link } from "react-router-dom";

function PogPlayers() {
  return (
    <>
      <h1 className="text-white text-3xl underline underline-offset-4">
        "POG - Pappaene Og Gutta"
      </h1>
      <div className=" flex flex-wrap justify-center space-x-4">
        <div className="max-w-96 text-white text-center shadow-sm brightness-50 hover:brightness-105 hover:scale-105 duration-200 ">
          <img
            className="max-w-96 max-h-96 peer"
            src="https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXA6Q1NL4kmrAlOA0_FVPCi2t_fUkRxNztDu4W1OQhm1uDbeDJM7dCJgoGZnrmjauOHlTIGvpwojuqZ9tuniQfn_xVlZWiiIIaSc1Q6Y1HSr1Loxebtm9bi60SKLiwN/360fx360f"
            alt="jokkimsen"
          />
          <Link
            to="https://steamcommunity.com/profiles/76561199141007923"
            target="_blank"
          >
            <h1 className="text-white text-lg hover:underline hover:scale-110 duration-300">
              Jokkimsen
            </h1>
          </Link>
          <p className="italic underline">Rolle: Entry fragger/Support </p>

          <p className="opacity-0 peer-hover:opacity-100 peer-hover:duration-150 peer-hover:ease-in">
            Gamlefar som elsker aftereight. Svekket reaksjonsevne pga alder, men
            treffer når han har dagen. Pappagamer i all sin prakt, med
            pappakropp og pappahumor.
          </p>
        </div>
        <div className="max-w-96 text-white text-center shadow-sm brightness-50 hover:brightness-105 hover:scale-105 duration-200">
          <img
            className="max-w-96 max-h-96 peer"
            src="https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXA6Q1NL4kmrAlOA0_FVPCi2t_fUkRxNztDu4W1OQhm1uDbeDJM7dCJgoGZkaW6a7qAzjMIv8NwiOrE89ii2Abg-BJpN2vxLdLAJgI8aFnRq1m8xuy5gIj84sqp6vWFng/360fx360f"
            alt="hansemann"
          />

          <Link
            to="https://steamcommunity.com/profiles/76561197994879469"
            target="_blank"
          >
            <h1 className="text-white text-lg hover:underline hover:scale-110 duration-300">
              Hansemann
            </h1>
          </Link>
          <p className="italic underline">Rolle: AWP'er/IGL</p>
          <p className="opacity-0 peer-hover:opacity-100 peer-hover:duration-150 peer-hover:ease-in">
            Vestlending kjent for sine vestlending-tilt. Ingen skjønner hva han
            sier, men han treffer hoder og vi forstår hans cs-språk. Samboer,
            far til 2 og driftssjef i jobb.
          </p>
        </div>
        <div className="max-w-96 text-white text-center shadow-sm brightness-50 hover:brightness-105 hover:scale-105 duration-200">
          <img
            className="max-w-96 max-h-96 peer"
            src="https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXA6Q1NL4kmrAlOA0_FVPCi2t_fUkRxNztUoreaOAZz7OXJYzRD4six2tjcwqXya-rSxjoEuZwl2b6S8NSiiwHt_RJoZjv7cISTIQ4_ZQ7SrweggbC4GIQNAfw/360fx360f"
            alt="kulsrud"
          />
          <Link
            to="https://steamcommunity.com/profiles/76561197987464349"
            target="_blank"
          >
            <h1 className="text-white text-lg hover:underline hover:scale-110 duration-300">
              Kulsrud
            </h1>
          </Link>
          <p className="italic underline">Rolle: Lurker/Entry fragger</p>
          <p className="opacity-0 peer-hover:opacity-100 peer-hover:duration-150 peer-hover:ease-in">
            Musiker’n! Når han ikke skyter hoder, turnerer han verden rundt. Når
            vi er heldige at han er hjemme, kan man alltid stole på at hoder
            ruller på server. «Dreper» deg med lyden av bly eller lyden av
            toner.
          </p>
        </div>
        <div className="max-w-96 text-white text-center shadow-sm brightness-50 hover:brightness-105 hover:scale-105 duration-200">
          <img
            className="max-w-96 max-h-96 peer"
            src="https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXA6Q1NL4kmrAlOA0_FVPCi2t_fUkRxNztUoreaOBM27OXJYzRD4si42tLbzvbwYr7Vkm4Hupd02riZodv20QXjqRJpY2igcNfGdA88aVjQ-lOggbC4BCCStmY/360fx360f"
            alt="keli"
          />
          <Link to="https://steamcommunity.com/id/keli96/" target="_blank">
            {" "}
            <h1 className="text-white text-lg hover:underline hover:scale-110 duration-300">
              Keli
            </h1>
          </Link>
          <p className="italic underline">Rolle: Support</p>
          <p className="opacity-0 peer-hover:opacity-100 peer-hover:duration-150 peer-hover:ease-in">
            Bergenser’n! Sportsidiot og yngstemann. Fikser det meste av
            utility-bruk så de andre på laget slipper. Ofte i klammeri med
            Hansemann med bakgrunn i at de snakker dialekter ingen forstår.
          </p>
        </div>
        <div className="max-w-96 text-white text-center shadow-sm brightness-50 hover:brightness-105 hover:scale-105 duration-200">
          <img
            className="max-w-96 max-h-96 peer"
            src="https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXA6Q1NL4kmrAlOA0_FVPCi2t_fUkRxNztDu4W1OQhm1uDbeDJM7dCJgoGZn7mgNuuGkDIF6ZEg373HoIqh2ADnqkFoN231coKSdVA7aQvZq1PrxObrm9bi6xYv37JH/360fx360f"
            alt="sander"
          />
          <Link to="https://steamcommunity.com/id/TheOnionJr/" target="_blank">
            <h1 className="text-white text-lg hover:underline hover:scale-110 duration-300">
              TheOnionJr
            </h1>
          </Link>
          <p className="italic underline">Rolle: Entry fragger/Support</p>
          <p className="opacity-0 peer-hover:opacity-100 peer-hover:duration-150 peer-hover:ease-in">
            Forvillet vestlending, med innslag av trønder, bosatt i Oslo. Rolig
            som skjæra på tunet - før den flyr avgårde. Potet på server som
            misbrukes i flere roller der vi andre ikke når opp.
          </p>
        </div>
        <div className="max-w-96 text-white text-center shadow-sm brightness-50 hover:brightness-105 hover:scale-105 duration-200">
          <img
            className="max-w-96 max-h-96 peer"
            src="https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXA6Q1NL4kmrAlOA0_FVPCi2t_fUkRxNztUoreaOBM27OXJYzRD4si82tOIxq_3N-yDl2hXuZQhibuUpN2jjQPtqRc5Z2zxd9DDclRqaArW_wWggbC4Uzmy7rk/360fx360f"
            alt="glimoen"
          />
          <Link
            to="https://steamcommunity.com/profiles/76561199004191798"
            target="_blank"
          >
            <h1 className="text-white text-lg hover:underline hover:scale-110 duration-300">
              Rubinstern
            </h1>
          </Link>
          <p className="italic underline">Rolle: Support(Step-in)</p>
          <p className="opacity-0 peer-hover:opacity-100 peer-hover:duration-150 peer-hover:ease-in">
            Tidligere analytiker for 777, og vår teori-master. Gjør man ikke som
            Glimoen sier, får man høre det. Mysens store sønn, som analyserer
            matcher og påpeker alt vi gjør feil (og evt det vi gjør riktig).
            Eier egen hest.
          </p>
        </div>
        <div className="max-w-96 text-white text-center shadow-sm brightness-50 hover:brightness-105 hover:scale-105 duration-200">
          <img
            className="max-w-96 max-h-96 peer"
            src="https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXA6Q1NL4kmrAlOA0_FVPCi2t_fUkRxNztDu4WpLgJ07OXJYzRD4si82tjSwqX3YrqDwj0D7cEk0rqQodTx3ATnqUVuYWChJNWcJ1NrMw7UqQeggbC4rcbCM1Y/360fx360f"
            alt="Larsin"
          />
          <Link
            to="https://steamcommunity.com/profiles/76561198196279219"
            target="_blank"
          >
            <h1 className="text-white text-lg hover:underline hover:scale-110 duration-300">
              Larsimann
            </h1>
          </Link>
          <p className="italic underline">Rolle: Entry fragger</p>
          <p className="opacity-0 peer-hover:opacity-100 peer-hover:duration-150 peer-hover:ease-in">
            Æresmedlem i rullestolpeek. Ingen i rullestol som treffer bedre enn
            Larsin. Jovial og kunnskapsrik bergenser, vår egen level 10 på
            faceit. Misser aldri en clutch.
          </p>
        </div>
      </div>
    </>
  );
}

export default PogPlayers;
