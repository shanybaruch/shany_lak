import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      
     <Home/>
     <Features/>
     <Contact/>



      <Footer />
    </div>
  );
}

export default App;
