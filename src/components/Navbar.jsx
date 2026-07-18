import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        Journey Journal
      </div>

      <div className="nav-links">

        <Link to="/">Home</Link>

        <Link to="/about">About Me</Link>

        <Link to="/blog">Blog</Link>

        <Link to="/contact">Contact</Link>

      </div>

    </nav>
  );
}

export default Navbar;