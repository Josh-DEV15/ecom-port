import "./About.css";

function About() {

  return (
    <section className="about-page">

      {/* HERO */}

      <div className="about-hero">

        <div className="about-overlay"></div>

        <div className="about-content">

          <p className="about-tag">
            WHO WE ARE
          </p>

          <h1>
            Redefining
            <span> Modern Luxury.</span>
          </h1>

          <p>
            Realix blends fashion, technology,
            and premium experiences into one
            powerful lifestyle ecosystem.
          </p>

        </div>

      </div>

      {/* STORY */}

      <div className="about-section">

        <div className="about-text">

          <p className="section-tag">
            OUR STORY
          </p>

          <h2>
            Built For The
            Next Generation
          </h2>

          <p>
            Realix was created to redefine
            digital commerce through premium
            design, curated products, and
            immersive shopping experiences.
          </p>

          <p>
            We believe luxury should feel
            modern, effortless, and deeply
            connected to culture.
          </p>

        </div>

        <div className="about-image">

          <img
            src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2070&auto=format&fit=crop"
            alt="Luxury"
          />

        </div>

      </div>

      {/* STATS */}

      <div className="stats-section">

        <div className="stat-card">
          <h3>20+</h3>
          <p>Premium Products</p>
        </div>

        <div className="stat-card">
          <h3>5K+</h3>
          <p>Luxury Customers</p>
        </div>

        <div className="stat-card">
          <h3>98%</h3>
          <p>Customer Satisfaction</p>
        </div>

      </div>

      {/* MISSION */}

      <div className="mission-section">

        <p className="section-tag">
          OUR MISSION
        </p>

        <h2>
          Elevating Everyday Experiences
        </h2>

        <p>
          Through intentional design,
          innovation, and craftsmanship,
          Realix delivers products that
          inspire confidence, creativity,
          and individuality.
        </p>

      </div>

    </section>
  );
}

export default About;