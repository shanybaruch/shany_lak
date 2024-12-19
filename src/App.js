import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import HomePage from "./components/Bodyhome/Bodyhome";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <HomePage/>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />}/>
        <Route path="/Contact" element={<Contact />}/>
      </Routes>
    </div>
  );
}

export default App;
