import React from "react";
import "./Players.css";

const people = [
  {
    name: "Jokkimsen",
    role: "Rifler",
    description: "Spilt CS siden 1.6. Tok det opp igjen etter mange års pause.",
    imageUrl: "https://cdn.worldvectorlogo.com/logos/counter-strike.svg",
  },
  {
    name: "Ralama",
    role: "Rifler/entry-fragger",
    description: "Vanvittig god spiller, med hinsides god game-sense.",
    imageUrl: "https://cdn.worldvectorlogo.com/logos/counter-strike.svg",
  },
  {
    name: "Hansemann",
    role: "AWP & entry-fragger.",
    description: "Vestlending med temperament, men som treffer som en gud.",
    imageUrl: "https://cdn.worldvectorlogo.com/logos/counter-strike.svg",
  },
  {
    name: "Keli",
    role: "Rifler",
    description:
      "Lagets bergenser. Ikke rart han er så god i CS, så mye som det regner i Bergen så blir det mye innetid.",
    imageUrl: "https://cdn.worldvectorlogo.com/logos/counter-strike.svg",
  },
  {
    name: "TheOnionJr",
    role: "Support/IGL",
    description:
      "Lugn, rolig og bunnsolid lagspiller som alltid klarer å holde hodet kaldt.",
    imageUrl: "https://cdn.worldvectorlogo.com/logos/counter-strike.svg",
  },
  {
    name: "Kulsrud",
    role: "Lurker",
    description:
      "Lagets lurker og 'lasersikte'. Møter du på kulsrud, er du trolig allerede død. ",
    imageUrl: "https://cdn.worldvectorlogo.com/logos/counter-strike.svg",
  },
  {
    name: "Rubinstern",
    role: "Support/IGL",
    description: "Lagets coach med erfaring fra tidligere profesjonelle lag.",
    imageUrl: "https://cdn.worldvectorlogo.com/logos/counter-strike.svg",
  },
];

function PogPlayers() {
  return (
    <ul role="list" className="divide-y divide-gray-100">
      {people.map((person) => (
        <li
          key={person.description}
          className="flex justify-between gap-x-6 py-5"
        >
          <div className="flex min-w-0 gap-x-4">
            <img
              className="h-12 w-12 flex-none rounded-full bg-gray-50"
              src={person.imageUrl}
              alt=""
            />
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">
                {person.name}
              </p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                {person.description}
              </p>
            </div>
          </div>
          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p className="text-sm leading-6 text-gray-900">{person.role}</p>
            {person.lastSeen ? (
              <p className="mt-1 text-xs leading-5 text-gray-500">
                Last seen{" "}
                <time dateTime={person.lastSeenDateTime}>
                  {person.lastSeen}
                </time>
              </p>
            ) : (
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </div>
                <p className="text-xs leading-5 text-gray-500">Online</p>
              </div>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default PogPlayers;
