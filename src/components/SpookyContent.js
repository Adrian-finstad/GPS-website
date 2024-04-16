import React from "react";

function SpookyWinnerContent() {
  return (
    <>
      <div class=" mx-auto flex flex-col items-center max-w-screen-2xl px-4  lg:px-8">
        <div class="max-w-lg md:max-w-xl lg:max-w-2xl py-16 sm:py-16">
          <h1 class="text-2xl font-bold tracking-tight sm:text-4xl text-white text-center">
            Gratulerer så mye til Stig-Rune som vinner av GPS's Spooky-Season
            konkurranse!
          </h1>
          <hr></hr>
        </div>

        <div class="pt-6 max-w-lg lg:max-w-2xl">
          <article class="space-x-14 leading-8 text-white text-xl sm:text-3xl flex flex-row mt-18">
            <p className="font-sans">
              Vi fikk inn flere utrolig gode bidrag til høstens kreative
              konkurranse, men til slutt var det Stig-Runes bidrag som stakk av
              med seieren etter felles avstemning fra communityet. Vi gratulerer
              han så mye med seieren, og for æren av å være "Mr.Spooky" på
              discorden vår ut resten av året!
            </p>
            <br></br>
          </article>
        </div>
      </div>

      <div class="max-w-screen-2xl px-5 py-12 mx-auto flex flex-wrap">
        <div class="lg:w-3/4  mx-auto">
          <div class="flex flex-wrap justify-center pt-12 px-10 relative mb-4">
            <img
              alt="gallery"
              class=" object-contain h-full object-center inset-0 rounded-xl shadow-xl ring-1 ring-gray-400/10"
              src="/images/Hansen_Spooky.png"
            />
            <text className="text-xl text-white">Vinnerbilde: HanXeto</text>
          </div>
          <br></br>
          <br></br>
          <div class="flex flex-col items-center -mx-2">
            <div class="px-2 py-10 lg:w-3/4 mx-auto">
              <div class="flex flex-wrap justify-center  sm:px-10 px-6 relative">
                <img
                  alt="gallery"
                  class="object-contain h-full object-center inset-0 rounded-xl "
                  src="/images/HexKindness.png"
                />
                <text className="text-xl text-white">
                  Bildebidrag: HexKindness
                </text>
              </div>
            </div>
            <div class="px-2  max-w-lg lg:max-w-2xl">
              <div class="flex flex-wrap justify-center w-full sm:pt-24 sm:px-10 px-6 relative">
                <img
                  alt="gallery"
                  class="w-full object-contain h-max object-center inset-0 rounded-xl shadow-xl ring-1 ring-gray-400/10"
                  src="/images/vannmelon.jpg"
                />
                <text className="text-xl text-white">
                  Bildebidrag: Vannmelon
                </text>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <p className="text-white text-xl md:text-2xl leading-8 font-sans max-w-screen-2xl">
                  Vi takker så mye for alt engasjement og alle bidrag i
                  konkurransen! Og vant du ikke denne gang - fortvil ei! Flere
                  lignende konkurranser vil bli arrangert i fremtiden. Så følg
                  med på discorden for neste mulighet!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SpookyWinnerContent;
