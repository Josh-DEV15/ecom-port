import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";

function Cart() {

  const { cart, removeFromCart } =
    useContext(CartContext);

  const total = cart.reduce(
    (acc, item) => acc + item.price,
    0
  );

  return (
    <section className="cart-page">

      {/* HEADER */}

      <div className="cart-header">

        <p className="cart-tag">
          YOUR SHOPPING BAG
        </p>

        <h1>
          Cart Summary 🛒
        </h1>

        <p className="cart-subtext">
          Review your selected products before
          completing your premium checkout experience.
        </p>

      </div>

      {/* EMPTY CART */}

      {cart.length === 0 ? (

        <div className="empty-cart">

          <div className="empty-icon">
            🛍️
          </div>

          <h2>Your cart is empty</h2>

          <p>
            Looks like you haven’t added anything yet.
          </p>

          <Link to="/">
            <button className="continue-btn">
              Continue Shopping
            </button>
          </Link>

        </div>

      ) : (

        <div className="cart-layout">

          {/* CART ITEMS */}

          <div className="cart-items">

            {cart.map((item) => (

              <div
                key={item.id}
                className="cart-card"
              >

                <div className="cart-image-wrapper">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-image"
                  />

                </div>

                <div className="cart-content">

                  <span className="cart-category">
                    {item.category}
                  </span>

                  <h3>
                    {item.name}
                  </h3>

                  <p className="cart-rating">
                    ⭐ {item.rating}
                  </p>

                  <p className="cart-price">
                    ${item.price}
                  </p>

                </div>

                <button
                  className="remove-btn"
                  onClick={() =>
                    removeFromCart(item.id)
                  }
                >
                  Remove
                </button>

              </div>

            ))}

          </div>

          {/* SUMMARY */}

          <div className="summary-card">

            <h2>Order Summary</h2>

            <div className="summary-row">
              <span>Items</span>
              <span>{cart.length}</span>
            </div>

            <div className="summary-row">
              <span>Shipping</span>
              <span>Free</span>
            </div>

            <div className="summary-row total-row">
              <span>Total</span>
              <span>${total}</span>
            </div>

            <Link to="/checkout">
              <button className="checkout-btn">
                Proceed to Checkout
              </button>
            </Link>

          </div>

        </div>

      )}

    </section>
  );
}

export default Cart;