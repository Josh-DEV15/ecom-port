import products from "../data/products";
import ProductCard from "../components/ProductCard";
import "./Accessories.css";

function Accessories() {

  // FILTER ACCESSORIES PRODUCTS

  const accessories =
    products.filter(
      (product) =>
        product.category === "Accessories" ||
        product.category === "Jewelry"
    );

  return (
    <section className="accessories-page">

      {/* HERO */}

      <div className="accessories-hero">

        <div className="accessories-overlay"></div>

        <div className="accessories-content">

          <p className="accessories-tag">
            ELEVATED ESSENTIALS
          </p>

          <h1>
            Accessories Collection ✨
          </h1>

          <p>
            Luxury finishing touches crafted
            for modern lifestyles and timeless
            aesthetics.
          </p>

        </div>

      </div>

      {/* FEATURE SECTION */}

      <div className="feature-banner">

        <div className="feature-text">

          <p className="section-tag">
            CURATED LUXURY
          </p>

          <h2>
            Details Define Style
          </h2>

          <p>
            From premium jewelry to modern
            accessories, Realix delivers
            statement pieces built to elevate
            every outfit and experience.
          </p>

        </div>

      </div>

      {/* PRODUCTS */}

      <div className="accessories-products">

        <div className="section-header">

          <h2>
            Featured Accessories
          </h2>

          <p>
            Curated accessories designed
            for modern luxury.
          </p>

        </div>

        <div className="grid">

          {accessories.map((product) => (

            <ProductCard
              key={product.id}
              product={product}
            />

          ))}

        </div>

      </div>

    </section>
  );
}

export default Accessories;