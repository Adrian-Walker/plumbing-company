import { Link, Routes, Route, } from 'react-router-dom';
import React from 'react';
import './style.css';

import Home from "./Home"
import About from "./About"
import Services from "./Services"

function App() {
  return (
    <div>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
      </nav>



      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/services" element={<Services />} />
      </Routes>

      <footer className="footer">
        <h2>Footer</h2>
      </footer>

    </div>
  );
}

export default App;
