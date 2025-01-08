import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Services from "./components/Services/Services";
import Calendar from "./components/Calendar/Calendar";
import ScrollToTop from "./components/Scrolltotop/Scrolltotop.jsx";
import PriceList from "./components/PriceList/PriceList.jsx";

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* רכיב שמגלגל לראש הדף */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/pricelist" element={<PriceList />} />
      </Routes>
    </Router>
  );
}

export default App;
