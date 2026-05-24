
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaTwitter,
  FaTiktok,
  FaGithub
} from "react-icons/fa";

import "./Footer.css";

function Footer() {

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* BRAND */}

        <div className="footer-brand">

          <h2>
            Realix
          </h2>

          <p>
            Luxury fashion & tech experiences
            crafted for the next generation.
          </p>

          <div className="socials">

            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaTwitter />
            </a>

            <a href="#">
              <FaTiktok />
            </a>

            <a href="#">
              <FaGithub />
            </a>

          </div>

        </div>

        {/* LINKS */}

        <div className="footer-links">

          <div className="footer-column">

            <h3>Shop</h3>

            <Link to="/new-arrivals">
              New Arrivals
            </Link>
            <Link to="/trending">
              Trending
            </Link>
            <Link to="/collections">
              Collections
            </Link>
            <Link to="/accessories">
              Accessories
            </Link>

          </div>

          <div className="footer-column">

            <h3>Company</h3>

            <Link to="/about">
              About
            </Link>
            <Link to="/careers">
              Careers
            </Link>
            <Link to="/contact">
              Contact
            </Link>
            <Link to="/support">
              Support
            </Link>

          </div>

          <div className="footer-column">

            <h3>Legal</h3>

            <Link to="/privacy">
              Privacy Policy
            </Link>
            <Link to="/terms">
              Terms of Service
            </Link>
            <Link to="/shipping">
              Shipping
            </Link>
            <Link to="/refunds">
              Refunds
            </Link>

          </div>

        </div>

      </div>

      {/* BOTTOM */}

      <div className="footer-bottom">

        <p>
          © 2026 Realix.
          All rights reserved.
        </p>

        <span>
          Built for modern luxury ✨
        </span>

      </div>

    </footer>
  );
}

export default Footer;