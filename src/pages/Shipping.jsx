import "./Legal.css";

function Shipping() {

  return (
    <section className="legal-page">

      <div className="legal-hero">

        <div className="legal-overlay"></div>

        <div className="legal-content">

          <p className="legal-tag">
            POLICY
          </p>

          <h1>
            Shipping Policy
          </h1>

          <p>
            Fast and secure delivery
            for every Realix order.
          </p>

        </div>

      </div>

      <div className="legal-container">

        <div className="legal-block">

          <h2>
            Processing Time
          </h2>

          <p>
            Orders are processed within
            1–3 business days.
          </p>

        </div>

        <div className="legal-block">

          <h2>
            Delivery Times
          </h2>

          <p>
            Shipping times vary by
            location and delivery method.
          </p>

        </div>

        <div className="legal-block">

          <h2>
            International Shipping
          </h2>

          <p>
            Realix ships globally to
            selected countries.
          </p>

        </div>

      </div>

    </section>
  );
}

export default Shipping;