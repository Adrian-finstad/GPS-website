import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./components/pages/AboutUs";
import SignUp from "./components/pages/SignUp";
import Home from "./components/pages/Home";
import Esport from "./components/pages/Esport";
import ScrollToTop from "./components/TopScroller";
import SpookyWinner from "./components/pages/SpookyContestWinner";
import NyttLag from "./components/pages/NyttLagCsLiga";
import Cs2Ankomst from "./components/pages/Cs2Ankomst";
import GpsttvAnnouncement from "./components/pages/GpsttvNyhet";
import GpsXmas from "./components/pages/GodJul";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <ScrollToTop>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/Esport" element={<Esport />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/Spooky-contest-winner" element={<SpookyWinner />} />
            <Route path="/Nytt-lag-cs-liga" element={<NyttLag />} />
            <Route path="/Cs2-er-her" element={<Cs2Ankomst />} />
            <Route path="/GPS-god-jul" element={<GpsXmas />} />
            <Route
              path="/GPS-community-twitch"
              element={<GpsttvAnnouncement />}
            />
          </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;
