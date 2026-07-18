import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <p>
        © 2026 <Link to="/" className="footer-logo">Journey Journal</Link>. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
