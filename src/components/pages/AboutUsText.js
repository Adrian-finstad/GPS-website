import React from "react";

const stats = [
  {
    name: "Unike spill som jevnlig spilles sammen blant medlemmene våre!",
    value: "12++",
  },
  { name: "Medlemmer!", value: "300+" },
  { name: "Timer streamet totalt!", value: "275+" },
  { name: "uvurderlige øyeblikk!", value: "Utallige" },
];

function AboutUsText() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 sm:py-6 h-fit min-h-screen">
      <img
        src="/images/GPS_banner_vanlig.png"
        alt=""
        className="fixed inset-11 -z-20 h-full w-full opacity-10 object-contain sm:object-fill object-right md:object-contain md:object-center"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="italic text-4xl font-bold tracking-tight text-white sm:text-6xl">
            En idè, som ble til et community
          </h2>
          <div className="flex flex-col">
            <p className="mt-2 text-lg leading-8 text-gray-300 text-start font-sans font-medium">
              GPS (Gutta På Skauen) ble stiftet Februar 2023 av brødrene
              Jokkimsen, og Sgt.satan. Jokkimsen hadde allerede vært med å
              etablert et community tidligere med rundt 400 medlemmer, men
              brødrene ønsket å starte noe sammen, og fra scratch.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300 text-start font-sans">
              Navnet GPS kan ha flere betydninger: <br></br>
              <br></br>1. Gutta På Skauen. Vi er fra det mange vil omtale som
              skauen, eller bygda om du vil. I tillegg har det en historisk
              schwong. Gutta På Skauen kjempet for å utgjøre en forskjell, noe
              som også er noe av grunnverdien for serveren.<br></br>
              <br></br> 2. GPS kan også være en betydning av at du vet hvilken
              discord du skal til, at du blir loset i riktig retning. <br></br>
              <br></br>Tanken bak serveren er å ha en møteplass, hvor mennesker
              har toleranse, aksept og respekt for hverandre. Det skal være
              jovialt, preget av humor, og med stor takhøyde hvor man ikke
              nødvendigvis tar seg selv så høytidelig. Om man ønsker å stifte
              nye bekjentskaper, finne noen å spille med, henge rundt, se en
              film eller høre på musikk, så er tanken at discorden skal være for
              alle. Vi ønsker et inkluderende samfunn hvor det er en felles
              dugnad om å sørge for at alle føler seg velkomne og det er en
              kollektiv enighet om å "være mot andre, som du vil dem skal være
              mot deg". <br></br>
              <br></br>
              <p className="font-bold">Velkommen til GPS!</p>
            </p>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse">
                <dt className="text-base leading-7 text-gray-300">
                  {stat.name}
                </dt>

                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="text-white">
          __________________________________________________________________________________________________________________________
        </div>
      </div>
    </div>
  );
}

export default AboutUsText;
