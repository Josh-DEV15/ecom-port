import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import "./ProductCard.css";

function ProductCard({ product }) {

  const {
    addToCart,
    addToWishlist
  } = useContext(CartContext);

  return (
    <div className="product-card">

      {/* IMAGE */}

      <div className="product-image-wrapper">

        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />

        <div className="product-overlay"></div>

        <button
          className="wishlist-icon"
          onClick={() =>
            addToWishlist(product)
          }
        >
          ❤️
        </button>

      </div>

      {/* CONTENT */}

      <div className="product-content">

        <span className="product-category">
          {product.category}
        </span>

        <h3 className="product-title">
          {product.name}
        </h3>

        <div className="product-info">

          <p className="product-price">
            ${product.price}
          </p>

          <p className="product-rating">
            ⭐ {product.rating}
          </p>

        </div>

        {/* BUTTONS */}

        <div className="product-buttons">

          <button
            className="cart-btn"
            onClick={() =>
              addToCart(product)
            }
          >
            Add To Cart
          </button>

          <Link
            to={`/product/${product.id}`}
            className="details-link"
          >
            View Details
          </Link>

        </div>

      </div>

    </div>
  );
}

export default ProductCard;