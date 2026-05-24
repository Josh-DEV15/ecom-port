import React, { useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import "./Home.css";

function Home({ search }) {

  /* ---------------- SMOOTH SCROLL ---------------- */

  const scrollToProducts = () => {

    const section =
      document.getElementById("products");

    section.scrollIntoView({
      behavior: "smooth"
    });
  };

  /* ---------------- FILTER PRODUCTS ---------------- */

  const filteredProducts =
    products.filter((product) =>
      product.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  return (
    <div className="home">
      
      {/* HERO SECTION */}

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
            onClick={scrollToProducts}
          >
            Shop Now
          </button>

        </div>

      </section>

      {/* PRODUCTS SECTION */}

      <section
        className="products-section"
        id="products"
      >

        <div className="section-header">

          <h2>
            Featured Products
          </h2>

          <p>
            Handpicked products crafted for
            premium experiences.
          </p>

        </div>

        {/* PRODUCTS GRID */}

        <div className="grid">

          {filteredProducts.length > 0 ? (

            filteredProducts.map((product) => (

              <ProductCard
                key={product.id}
                product={product}
              />

            ))

          ) : (

            <div className="no-results">

              <h3>
                No products found 😭
              </h3>

              <p>
                Try searching for something else.
              </p>

            </div>

          )}

        </div>

      </section>

    </div>
  );
}

export default Home;