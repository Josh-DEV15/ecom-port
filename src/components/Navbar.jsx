import { Link } from "react-router-dom";
import {
  useContext,
  useState
} from "react";

import { CartContext }
from "../context/CartContext";

import "./Navbar.css";

function Navbar({
  search,
  setSearch
}) {

  const {
    cartCount,
    wishlist
  } = useContext(CartContext);

  const [menuOpen, setMenuOpen] =
    useState(false);

  const [searchOpen, setSearchOpen] =
    useState(false);

  return (
    <header className="navbar-wrapper">

      <nav className="navbar">

        {/* LOGO */}

        <Link
          to="/"
          className="logo"
        >
          Vaultix
        </Link>

        {/* LINKS */}

        <div
          className={`nav-links ${
            menuOpen ? "active" : ""
          }`}
        >

          <Link to="/">Home</Link>

          <Link to="/cart">
            Cart

            {cartCount > 0 && (
              <span className="badge">
                {cartCount}
              </span>
            )}
          </Link>

          <Link to="/wishlist">
            Wishlist

            {wishlist.length > 0 && (
              <span className="badge">
                {wishlist.length}
              </span>
            )}
          </Link>

        </div>

        {/* SEARCH */}

        <div className="nav-actions">

          <div
            className={`search-box ${
              searchOpen ? "active" : ""
            }`}
          >

            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />

          </div>

          <button
            className="search-btn"
            onClick={() =>
              setSearchOpen(!searchOpen)
            }
          >
            🔍
          </button>

          <button
            className="menu-btn"
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
          >
            ☰
          </button>

        </div>

      </nav>

    </header>
  );
}

export default Navbar;