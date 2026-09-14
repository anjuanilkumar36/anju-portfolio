import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <a href="#home" className="logo">
        ANJU ANILKUMAR
      </a>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Tech Stack</a>
        <a href="#education">Education</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>

    </nav>
  );
}

export default Navbar;
