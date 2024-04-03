import React from "react";
import "../../App.css";
import Footer from "../Footer";
import "./Esport.css";
import GamingInformation from "../CsInfo";
import PogPlayers from "../PogPlayers";
import KokPlayers from "../KokPlayers";

function Esport() {
  return (
    <>
      <h1 className="header text-3xl font-bold underline">GPS-Esport</h1>
      <div className="flex flex-col items-center space-y-16 ">
        <div className="w-1/2">
          <PogPlayers />
        </div>
        <div className="w-1/2">
          <KokPlayers />
        </div>
        <div className="w-1/2">
          <GamingInformation />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Esport;
