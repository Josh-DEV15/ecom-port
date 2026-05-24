import "./Careers.css";

function Careers() {

  const jobs = [
    {
      title: "Frontend Developer",
      type: "Full Time",
      location: "Remote",
      description:
        "Build premium user experiences and modern ecommerce interfaces."
    },

    {
      title: "UI/UX Designer",
      type: "Contract",
      location: "Hybrid",
      description:
        "Design luxury digital experiences with modern aesthetics."
    },

    {
      title: "Social Media Manager",
      type: "Part Time",
      location: "Remote",
      description:
        "Grow the Vaultix brand across modern digital platforms."
    },

    {
      title: "Backend Engineer",
      type: "Full Time",
      location: "Remote",
      description:
        "Develop scalable infrastructure and ecommerce systems."
    }
  ];

  return (
    <section className="careers-page">

      {/* HERO */}

      <div className="careers-hero">

        <div className="careers-overlay"></div>

        <div className="careers-content">

          <p className="careers-tag">
            JOIN THE TEAM
          </p>

          <h1>
            Build The Future
            <span> With Vaultix.</span>
          </h1>

          <p>
            Join a team passionate about
            luxury experiences, innovation,
            and modern digital culture.
          </p>

        </div>

      </div>

      {/* CULTURE */}

      <div className="culture-section">

        <div className="culture-text">

          <p className="section-tag">
            OUR CULTURE
          </p>

          <h2>
            Creativity Meets Innovation
          </h2>

          <p>
            At Vaultix, we believe great
            products come from bold ideas,
            collaboration, and intentional
            design.
          </p>

          <p>
            We build experiences that feel
            premium, modern, and deeply
            connected to the future.
          </p>

        </div>

        <div className="culture-image">

          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
            alt="Team"
          />

        </div>

      </div>

      {/* JOBS */}

      <div className="jobs-section">

        <p className="section-tag">
          OPEN POSITIONS
        </p>

        <h2>
          Current Opportunities
        </h2>

        <div className="jobs-grid">

          {jobs.map((job, index) => (

            <div
              key={index}
              className="job-card"
            >

              <div className="job-top">

                <span className="job-type">
                  {job.type}
                </span>

                <span className="job-location">
                  {job.location}
                </span>

              </div>

              <h3>
                {job.title}
              </h3>

              <p>
                {job.description}
              </p>

              <button className="apply-btn">
                Apply Now
              </button>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Careers;