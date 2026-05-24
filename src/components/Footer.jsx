// Footer.jsx

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
            Vaultix
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

            <a href="#">New Arrivals</a>
            <a href="#">Trending</a>
            <a href="#">Collections</a>
            <a href="#">Accessories</a>

          </div>

          <div className="footer-column">

            <h3>Company</h3>

            <a href="#">About</a>
            <a href="#">Careers</a>
            <a href="#">Contact</a>
            <a href="#">Support</a>

          </div>

          <div className="footer-column">

            <h3>Legal</h3>

            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Shipping</a>
            <a href="#">Refunds</a>

          </div>

        </div>

      </div>

      {/* BOTTOM */}

      <div className="footer-bottom">

        <p>
          © 2026 Vaultix.
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