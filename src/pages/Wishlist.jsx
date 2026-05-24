import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./Wishlist.css";

function Wishlist() {
 const {
  wishlist,
  removeFromWishlist
} = useContext(CartContext);

  return (
    <section className="wishlist-page">

      <div className="wishlist-header">

        <p className="wishlist-tag">
          YOUR SAVED COLLECTION
        </p>

        <h1>
          Wishlist ❤️
        </h1>

        <p className="wishlist-subtext">
          Products you love, saved for future luxury.
        </p>

      </div>

      {wishlist.length === 0 ? (

        <div className="empty-wishlist">

          <div className="empty-icon">
            💔
          </div>

          <h2>Your wishlist is empty</h2>

          <p>
            Save products you love and they’ll appear here.
          </p>

        </div>

      ) : (

        <div className="wishlist-grid">

          {wishlist.map((item) => (

            <div
              key={item.id}
              className="wishlist-card"
            >

              <div className="wishlist-image-wrapper">

                <img
                  src={item.image}
                  alt={item.name}
                  className="wishlist-image"
                />

                <div className="wishlist-overlay"></div>

              </div>

              <div className="wishlist-content">

                <span className="wishlist-category">
                  {item.category}
                </span>

                <h3>
                  {item.name}
                </h3>

                <div className="wishlist-info">

                  <p className="wishlist-price">
                    ${item.price}
                  </p>

                  <p className="wishlist-rating">
                    ⭐ {item.rating}
                  </p>

                </div>

<div className="wishlist-actions">

  <button className="wishlist-btn">
    Move To Cart
  </button>

  <button
    className="remove-wishlist-btn"
    onClick={() =>
      removeFromWishlist(item.id)
    }
  >
    Remove
  </button>

</div>

              </div>

            </div>

          ))}

        </div>

      )}

    </section>
  );
}

export default Wishlist;