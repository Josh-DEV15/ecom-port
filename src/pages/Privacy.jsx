import "./Legal.css";

function Privacy() {

  return (
    <section className="legal-page">

      <div className="legal-hero">

        <div className="legal-overlay"></div>

        <div className="legal-content">

          <p className="legal-tag">
            LEGAL
          </p>

          <h1>
            Privacy Policy
          </h1>

          <p>
            Your privacy and data protection
            matter to us at Realix.
          </p>

        </div>

      </div>

      <div className="legal-container">

        <div className="legal-block">

          <h2>
            Information We Collect
          </h2>

          <p>
            Realix may collect personal
            information including your
            name, email address, shipping
            address, and payment details.
          </p>

        </div>

        <div className="legal-block">

          <h2>
            How We Use Data
          </h2>

          <p>
            We use collected information
            to improve services, process
            orders, and enhance customer
            experiences.
          </p>

        </div>

        <div className="legal-block">

          <h2>
            Data Protection
          </h2>

          <p>
            Your information is securely
            protected and never sold to
            unauthorized third parties.
          </p>

        </div>

      </div>

    </section>
  );
}

export default Privacy;