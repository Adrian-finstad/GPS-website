import React from "react";
import { Link } from "react-router-dom";

function KokTeamNews() {
  return (
    <>
      <div className="isolate overflow-hidden  px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="text-base font-semibold leading-7 text-black">
                  E-sport
                </p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Enda et GPS-lag med i GG-ligaen!
                </h1>
                <p className="mt-6 text-xl leading-8 text-white break-normal font-sans">
                  GPS har siden sesongen 2022 hatt laget "PoG - Pappaene og
                  Gutta" med i Good-Game-Ligaen(den gang Telialigaen).<br></br>{" "}
                  Nå er også nykommerne "KoK - Kuler & Kaffe" påmeldt i vårens
                  sesong 2024.
                </p>
              </div>
            </div>
          </div>
          <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img
              className="w-96 max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] brightness-90"
              src="https://csprofile.com/Images/Blog/best-cs2-screenshots/biome_map_screenshot.webp"
              alt=""
            />
            <div className="text-center justify-content-center underline">
              Foto: Cs-profile.com
            </div>
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-xl leading-7 text-white lg:max-w-lg">
                <p className="font-sans space-y-4">
                  Lagoppstillingen er som følger:
                  _________________________________
                  <br></br>
                  <ul className="font-sans">Sgt.Satan - Support/Lurk</ul>
                  <ul className="font-sans">JaneDoe - IGL/Support</ul>
                  <ul className="font-sans">Suprr - AWP'er/IGL</ul>
                  <ul className="font-sans">
                    VincentYa - Entry-fragger/Rifler(step)
                  </ul>
                  <ul className="font-sans">
                    Gladimir - Entry-fragger/Rifler(step)
                  </ul>
                  <ul className="font-sans">Marmika - Entry-fragger/AWP'er</ul>
                  <ul className="font-sans">
                    mawhface - Entry-fragger/Rifler(step)
                  </ul>
                  <ul className="font-sans">
                    mrcoldguy - Entry-fragger/Rifler
                  </ul>
                  <br></br>
                  <p className="font-sans">
                    Ønsker du å lese mer om KoK, eller E-sport i Gps? Da kan du
                    trykke{"     "}
                    <Link to="/Esport" className="underline">
                      her!
                    </Link>
                  </p>
                  <p className="font-sans">
                    Vi ønsker de masse lykke til i den kommende sesongen. Måtte
                    aimen være støtig, og hodet holdes kaldt!
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default KokTeamNews;
