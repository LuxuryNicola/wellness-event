import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Parties from "./components/Parties";
import Corporate from "./components/Corporate";
import Weddings from "./components/Weddings";
import About from "./components/About";
import ScrollToTop from "./components/ScrollToTop"; // link will take you top top of page

function App() {
  return (
    <Router basename="/wellness-event">
      <ScrollToTop />
      <div className="app-container">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/parties" element={<Parties />} />
            <Route path="/corporate" element={<Corporate />} />
            <Route path="/weddings" element={<Weddings />} />
          
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App; 


