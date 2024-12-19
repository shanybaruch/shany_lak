import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import HomePage from "./components/Bodyhome/Bodyhome";
import Contact from "./components/Contact/Contact";
import Features from "./components/Features/Features";

function App() {
  return (
    <div>
      <Navbar />
      <HomePage/>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />}/>
        <Route path="/Contact" element={<Contact />}/>
        <Route path="/Features" element={<Features />}/>
      </Routes>
    </div>
  );
}

export default App;
