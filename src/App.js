

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import DonorRegistrationPage from "./components/DonorRegistrationPage";
import Home from "./components/Home";
import ImpactPage from "./components/ImpactPage";
import ReachOut from "./components/ReachOut";
import InsightsPost from "./components/InsightsPost";
import DonationInfo from "./components/DonationInfo";

function App() {
  return (
    <Router>
<div className="bg-white text-gray-800 dark:bg-zinc-900 dark:text-white transition-colors duration-300">


        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<DonorRegistrationPage />} />
          <Route path="/article" element={<InsightsPost />} />
          <Route path="/impact" element={<ImpactPage />} />
          <Route path="/contact" element={<ReachOut />} />
          <Route path="/info" element={<DonationInfo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
