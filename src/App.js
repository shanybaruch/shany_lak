import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Calendar from "./components/Calendar/Calendar";
import FormSignUp from "./components/Formsignup/Formsignup"; // ייבוא רכיב יצירת יוזר

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/signup" element={<FormSignUp />} /> {/* נתיב חדש ל-Sign Up */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
