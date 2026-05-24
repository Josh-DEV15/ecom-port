import React from "react";
import "./Checkout.css";

function Checkout() {

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Order placed successfully 🎉");
  };

  return (
    <section className="checkout-page">

      <div className="checkout-container">

        {/* LEFT SIDE */}

        <div className="checkout-left">

          <p className="checkout-tag">
            SECURE PAYMENT
          </p>

          <h1>
            Complete Your
            <span> Order.</span>
          </h1>

          <p className="checkout-description">
            Experience a smooth and secure checkout
            process designed for premium shopping.
          </p>

          <div className="checkout-benefits">

            <div className="benefit-card">
              <h3>⚡ Fast Delivery</h3>
              <p>
                Nationwide delivery with secure handling.
              </p>
            </div>

            <div className="benefit-card">
              <h3>🔒 Secure Checkout</h3>
              <p>
                Your payment information stays protected.
              </p>
            </div>

            <div className="benefit-card">
              <h3>💎 Premium Support</h3>
              <p>
                24/7 customer assistance for all orders.
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="checkout-right">

          <form
            onSubmit={handleSubmit}
            className="checkout-form"
          >

            <div className="input-group">
              <label>Full Name</label>

              <input
                type="text"
                placeholder="John Doe"
                required
              />
            </div>

            <div className="input-group">
              <label>Email Address</label>

              <input
                type="email"
                placeholder="example@email.com"
                required
              />
            </div>

            <div className="input-group">
              <label>Shipping Address</label>

              <input
                type="text"
                placeholder="123 Main Street"
                required
              />
            </div>

            <div className="double-inputs">

              <div className="input-group">
                <label>Card Number</label>

                <input
                  type="text"
                  placeholder="**** **** **** 4242"
                  required
                />
              </div>

              <div className="input-group">
                <label>CVV</label>

                <input
                  type="text"
                  placeholder="123"
                  required
                />
              </div>

            </div>

            <button
              type="submit"
              className="checkout-btn"
            >
              Complete Order
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Checkout;