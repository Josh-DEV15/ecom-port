import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {

  const navigate = useNavigate();

  return (
    <div className="home">


      <section className="hero">

        <div className="hero-overlay"></div>

        <div className="hero-content">

          <p className="small-text">
            PREMIUM COLLECTION 2026
          </p>

          <h1>
            Elevate Your
            <span> Style.</span>
          </h1>

          <p className="hero-description">
            Discover luxury fashion, tech, and
            modern essentials curated for the
            next generation.
          </p>

          <button
            className="shop-btn"
            onClick={() => navigate("/shop")}
          >
            Shop Now
          </button>

        </div>

      </section>

    </div>
  );
}

export default Home;