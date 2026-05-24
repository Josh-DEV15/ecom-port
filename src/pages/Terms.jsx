import "./Legal.css";

function Terms() {

  return (
    <section className="legal-page">

      <div className="legal-hero">

        <div className="legal-overlay"></div>

        <div className="legal-content">

          <p className="legal-tag">
            LEGAL
          </p>

          <h1>
            Terms of Service
          </h1>

          <p>
            By using Realix, you agree
            to our platform terms.
          </p>

        </div>

      </div>

      <div className="legal-container">

        <div className="legal-block">

          <h2>
            User Responsibilities
          </h2>

          <p>
            Users are expected to use
            Realix responsibly and
            respectfully.
          </p>

        </div>

        <div className="legal-block">

          <h2>
            Product Availability
          </h2>

          <p>
            Product listings may change
            without prior notice based
            on availability.
          </p>

        </div>

        <div className="legal-block">

          <h2>
            Intellectual Property
          </h2>

          <p>
            All Realix branding and
            content remain protected
            intellectual property.
          </p>

        </div>

      </div>

    </section>
  );
}

export default Terms;