import React from "react";
import Footer from "../Footer";
import { Link } from "react-router-dom";

function GpsttvAnnouncement() {
  return (
    <>
      <section class="text-white  body-font">
        <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            class="lg:w-3/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src="/images/Snart_live.png"
          />

          <div class="text-center lg:w-2/3 w-full">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white underline-offset-4 underline">
              GPS har omsider fått sin egen community-stream på twitch!
            </h1>
            <p class="leading-relaxed mb-8 text-gray-200 text-xl sm:text-2xl">
              I tillegg til Jokkimsen og Sgt.Satan, har GPS nå også fått sin
              egen community stream. Her vil det streames kamper fra GG-ligaen,
              diverse community events, eller generell spilling fra communityet
              generelt.
              <br></br>
              <br></br>
              Klikk{" "}
              <Link
                to="https://www.twitch.tv/gpsttv"
                target="_blank"
                className="underline"
              >
                her
              </Link>{" "}
              for å sjekke ut twitch-kanalen!
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default GpsttvAnnouncement;
