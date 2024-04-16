import React from "react";
import { Link } from "react-router-dom";

function Cs2NyVideo() {
  return (
    <>
      <section class="text-gray-200  body-font">
        <div class="container mx-auto space-x-6 flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
            <iframe
              class="max-w-80 max-h-64 sm:max-w-none sm:max-h-none"
              width="600"
              height="400"
              src="https://www.youtube.com/embed/74sdbXjHIbQ?si=6IU3glMjAw-an9ku"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Ny video ute fra Jokkimsens nyeste stream!
            </h1>
            <p class="leading-relaxed text-xl">
              CS2 har omsider meldt sin ankomst, og ikke alt føles som før.
              Dette fører til litt klabb og babb, litt uvante utfordringer, og
              sabla mange morsomme øyeblikk. Sjekk ut oppsummeringen fra
              Jokkimsens nyeste stream i videoen, eller klikk deg inn på
              YouTube.
            </p>
          </div>
        </div>
        <div className="text-center text-xl sm:text-2xl">
          Ønsker du å se flere av GPS sine videoer på YouTube? Da kan du klikke
          {"   "}
          <Link
            to="https://www.youtube.com/@gpscommunity"
            className="underline"
          >
            her!
          </Link>
        </div>
      </section>
    </>
  );
}

export default Cs2NyVideo;
