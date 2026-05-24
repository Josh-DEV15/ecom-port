import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();

  const product = products.find(
    (p) => p.id === Number(id)
  );

  return (
    <section className="product-details-page">

      <div className="product-container">

        <div className="image-section">
          <div className="image-overlay"></div>

          <img
            src={product.image}
            alt={product.name}
            className="product-image"
          />
        </div>

        <div className="info-section">

          <p className="product-category">
            {product.category}
          </p>

          <h1 className="product-title">
            {product.name}
          </h1>

          <div className="rating-price">

            <div className="rating">
              ⭐ {product.rating}
            </div>

            <div className="price">
              ${product.price}
            </div>

          </div>

          <p className="description">
            Crafted with premium materials and designed
            for modern lifestyles, this product delivers
            elegance, comfort, and performance in one
            seamless experience.
          </p>

          <div className="features">

            <div className="feature-card">
              <h4>Premium Quality</h4>
              <p>
                Built using durable and luxury-grade
                materials.
              </p>
            </div>

            <div className="feature-card">
              <h4>Fast Delivery</h4>
              <p>
                Nationwide shipping with secure packaging.
              </p>
            </div>

            <div className="feature-card">
              <h4>Secure Payment</h4>
              <p>
                Smooth and protected checkout experience.
              </p>
            </div>

          </div>

          <div className="action-buttons">

            <button className="cart-btn">
              Add To Cart
            </button>

            <button className="wishlist-btn">
              ❤️ Wishlist
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default ProductDetails;