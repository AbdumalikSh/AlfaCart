import React from "react";
import Navbar from "./Components/Navbar";
import MainBanner from "./Components/MainBanner";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
