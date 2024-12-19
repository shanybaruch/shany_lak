import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import SignUpForm from "./components/Forms/Formsignup";
import HomePage from "./components/Home/Bodyhome";

function App() {
  return (
    <div>
      <Navbar />
      
      <HomePage/>
      
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} /> */}
      </Routes>
    </div>
  );
}

export default App;
