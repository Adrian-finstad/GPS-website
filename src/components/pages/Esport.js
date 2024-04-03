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
      <div>
        <PogPlayers />
      </div>
      <div>
        <KokPlayers />
      </div>
      <div>
        <GamingInformation />
      </div>
      <Footer />
    </>
  );
}

export default Esport;
