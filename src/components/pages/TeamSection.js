import React from "react";

const people = [
  {
    name: "Joachim/Jokkimsen",
    role: "Grunnlegger",
    imageUrl: "/images/Joachim.jpg",
    favGame: "CS2",
  },
  {
    name: "Adrian/Sgt.Satan",
    role: "Grunnlegger",
    imageUrl: "/images/Adrian.jpg",
    favGame: "WoW, CS2, RPG",
  },
  {
    name: "Fredrik/Mundsen",
    role: "GPS styr & stell, tech-support ",
    imageUrl: "/images/MundsenGreen.png",
    favGame: "Sim, RTS, CS",
  },
  {
    name: "Lennart/Hansemann",
    role: "GPS styr & stell",
    imageUrl: "/images/Lennart.jpg",
    favGame: "CS2",
  },
  {
    name: "Philip/GeneralBad",
    role: "GPS styr & stell",
    imageUrl: "/images/Philip.jpg",
    favGame: "SIM, RTS, FPS",
  },
  {
    name: "Pernille",
    role: "GPS styr & stell",
    imageUrl: "/images/Pernille.jpg",
    favGame: "CS2",
  },
  {
    name: "Sander/Sjallottlaukdaddy",
    role: "Grunnlegger",
    imageUrl: "/images/Onion.jpg",
    favGame: "CS2",
  },
  {
    name: "Øystein/Gladimir",
    role: "GPS styr & stell, Creative Director",
    imageUrl: "/images/Tony.jpg",
    favGame: "CS2, RPG, MMORPG",
  },
  {
    name: "Thor-Otto/Zlaszhy",
    role: "GPS styr & stell",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    favGame: "WoW",
  },

  // More people...
];

function TeamSection() {
  return (
    <>
      <div className="bg-gray-900">
        <div className=" pb-20 sm:pb-20  relative">
          <div className="mx-auto grid max-w-7xl gap-x-28 px-6 lg:px-8 xl:grid-cols-3">
            <div className="max-w-2xl ">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Hils på admingruppen vår!
              </h2>
              <p className="mt-6 text-lg leading-8 text-white cursor-text font-sans">
                I et stort og voksende community, har man behov for hjelp med
                administrative oppgaver, sørge for at regler blir fulgt, og at
                alle har det fint. Admingruppen vår bidrar med en uvurderlig
                jobb hver eneste dag, og sørger for at alle våre medlemmer føler
                seg velkommen, trygge, og ivaretatt. De fleste i admingruppen
                vår har vært med på reisen allerede fra start, og står klare til
                å ta imot alle nye medlemmer med et smil, trygghet, og en god
                latter på lur.
              </p>
            </div>
            <ul className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
              {people.map((person) => (
                <li key={person.name}>
                  <div className="flex items-center gap-x-6">
                    <img
                      className="h-36 w-36 md:w-20 md:h-20 rounded-full"
                      src={person.imageUrl}
                      alt=""
                    />
                    <div>
                      <h3 className="text-base font-semibold leading-7 tracking-tight text-white">
                        {person.name}
                      </h3>
                      <p className="text-sm font-semibold leading-6 text-indigo-600 font-sans">
                        {person.role}
                      </p>
                      <p className="text-sm font-semibold leading-6 text-white italic">
                        Spiller mest: {person.favGame}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default TeamSection;
