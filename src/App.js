import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./components/pages/AboutUs";
import SignUp from "./components/pages/SignUp";
import Home from "./components/pages/Home";
import Esport from "./components/pages/Esport";
import ScrollToTop from "./components/TopScroller";

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
          </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;
