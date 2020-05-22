import React from "react";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar">
      <a className="navbar-brand name" href="/">Sittichai Chaikamol</a>
      <div className="info">     
        <a className="about" href="/">About</a>
        <a className="portfolio" href="/Portfolio">Portfolio</a>
        <a className="contact" href="/Contact">Contact</a>
        <a className="contact" href="/Gallery">Example</a>
      </div>
    </nav>
  );
}
export default Navbar;
