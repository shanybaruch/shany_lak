import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Features from "./components/Features/Features";
import Calendar from "./components/Calendar/Calendar";
import FormSignUp from "./components/Formsignup/Formsignup";
import ScrollToTop from "./components/Scrolltotop/Scrolltotop.jsx";

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* רכיב שמגלגל לראש הדף */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
    </Router>
  );
}

export default App;
