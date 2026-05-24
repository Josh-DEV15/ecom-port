import "./Contact.css";

function Contact() {

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Message sent successfully ✨");
  };

  return (
    <section className="contact-page">

      {/* HERO */}

      <div className="contact-hero">

        <div className="contact-overlay"></div>

        <div className="contact-content">

          <p className="contact-tag">
            GET IN TOUCH
          </p>

          <h1>
            Let’s Connect.
          </h1>

          <p>
            Questions, collaborations, or
            support — we’d love to hear
            from you.
          </p>

        </div>

      </div>

      {/* CONTACT SECTION */}

      <div className="contact-container">

        {/* LEFT */}

        <div className="contact-info">

          <p className="section-tag">
            CONTACT INFO
          </p>

          <h2>
            Reach Out To Realix
          </h2>

          <p>
            Our team is always available to
            assist you with orders, inquiries,
            partnerships, and premium support.
          </p>

          <div className="info-cards">

            <div className="info-card">
              <h3>Email</h3>
              <p>support@realix.com</p>
            </div>

            <div className="info-card">
              <h3>Phone</h3>
              <p>+234 800 000 0000</p>
            </div>

            <div className="info-card">
              <h3>Location</h3>
              <p>Ibadan, Nigeria</p>
            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="contact-form-wrapper">

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            <div className="input-group">

              <label>
                Full Name
              </label>

              <input
                type="text"
                placeholder="John Doe"
                required
              />

            </div>

            <div className="input-group">

              <label>
                Email Address
              </label>

              <input
                type="email"
                placeholder="example@email.com"
                required
              />

            </div>

            <div className="input-group">

              <label>
                Message
              </label>

              <textarea
                placeholder="Write your message..."
                rows="6"
                required
              ></textarea>

            </div>

            <button
              type="submit"
              className="contact-btn"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;