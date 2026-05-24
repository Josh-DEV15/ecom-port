import "./Support.css";

function Support() {

  return (
    <section className="support-page">

      {/* HERO */}

      <div className="support-hero">

        <div className="support-overlay"></div>

        <div className="support-content">

          <p className="support-tag">
            HELP CENTER
          </p>

          <h1>
            How Can We
            Help You?
          </h1>

          <p>
            Find answers, support resources,
            and customer assistance for your
            Realix experience.
          </p>

        </div>

      </div>

      {/* SUPPORT OPTIONS */}

      <div className="support-options">

        <div className="support-card">

          <div className="support-icon">
            📦
          </div>

          <h3>
            Order Support
          </h3>

          <p>
            Track orders, shipping updates,
            and delivery assistance.
          </p>

        </div>

        <div className="support-card">

          <div className="support-icon">
            💳
          </div>

          <h3>
            Payments
          </h3>

          <p>
            Get help with payments,
            billing, and checkout issues.
          </p>

        </div>

        <div className="support-card">

          <div className="support-icon">
            🔄
          </div>

          <h3>
            Returns
          </h3>

          <p>
            Learn more about returns,
            refunds, and exchanges.
          </p>

        </div>

      </div>

      {/* FAQ */}

      <div className="faq-section">

        <p className="section-tag">
          FREQUENTLY ASKED QUESTIONS
        </p>

        <h2>
          Common Questions
        </h2>

        <div className="faq-container">

          <div className="faq-item">

            <h3>
              How long does shipping take?
            </h3>

            <p>
              Standard shipping usually
              takes 3–7 business days
              depending on your location.
            </p>

          </div>

          <div className="faq-item">

            <h3>
              Can I return a product?
            </h3>

            <p>
              Yes. Products can be returned
              within 14 days of delivery.
            </p>

          </div>

          <div className="faq-item">

            <h3>
              Do you offer international shipping?
            </h3>

            <p>
              Yes, Realix ships worldwide
              to selected regions.
            </p>

          </div>

          <div className="faq-item">

            <h3>
              How can I contact support?
            </h3>

            <p>
              Visit the Contact page or
              email support@realix.com
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Support;