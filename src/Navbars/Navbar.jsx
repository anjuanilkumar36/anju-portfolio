import { useState } from "react";

import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      <a
        href="#home"
        className="logo"
        onClick={() => setMenuOpen(false)}
      >
        A. ANJU
      </a>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      <div className={`nav-links ${menuOpen ? "mobile-open" : ""}`}>
        <a href="#home" onClick={() => setMenuOpen(false)}>
          Home
        </a>

        <a href="#about" onClick={() => setMenuOpen(false)}>
          About
        </a>

        <a href="#projects" onClick={() => setMenuOpen(false)}>
          Projects
        </a>



        <a href="#skills" onClick={() => setMenuOpen(false)}>
          Skills
        </a>

        

        
        <a href="#contact" onClick={() => setMenuOpen(false)}>
          Contact
        </a>
      </div>

    </nav>
  );
}

export default Navbar;