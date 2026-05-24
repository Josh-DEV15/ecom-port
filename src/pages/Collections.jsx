import "./Collections.css";

function Collections() {

  const collections = [

    {
      title: "Luxury Fashion",
      description:
        "Premium apparel and timeless style pieces.",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop"
    },

    {
      title: "Gaming Essentials",
      description:
        "Modern setups and immersive gaming accessories.",
      image:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop"
    },

    {
      title: "Smart Living",
      description:
        "Technology crafted for elevated lifestyles.",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop"
    },

    {
      title: "Minimal Workspace",
      description:
        "Clean productivity environments for creators.",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2070&auto=format&fit=crop"
    }

  ];

  return (
    <section className="collections-page">

      {/* HERO */}

      <div className="collections-hero">

        <div className="collections-overlay"></div>

        <div className="collections-content">

          <p className="collections-tag">
            CURATED EXPERIENCES
          </p>

          <h1>
            Explore Collections ✨
          </h1>

          <p>
            Handcrafted selections designed
            around culture, innovation,
            and modern luxury.
          </p>

        </div>

      </div>

      {/* COLLECTION GRID */}

      <div className="collections-grid">

        {collections.map((collection, index) => (

          <div
            key={index}
            className="collection-card"
          >

            <img
              src={collection.image}
              alt={collection.title}
            />

            <div className="collection-overlay-card"></div>

            <div className="collection-info">

              <h2>
                {collection.title}
              </h2>

              <p>
                {collection.description}
              </p>

              <button>
                Explore Collection
              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Collections;