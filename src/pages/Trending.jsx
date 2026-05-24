import products from "../data/products";
import ProductCard from "../components/ProductCard";
import "./Trending.css";

function Trending() {

  // Example trending products

  const trendingProducts =
    products.slice(0, 8);

  return (
    <section className="trending-page">

      {/* HERO */}

      <div className="trending-hero">

        <div className="trending-overlay"></div>

        <div className="trending-content">

          <p className="trending-tag">
            HOT RIGHT NOW
          </p>

          <h1>
            Trending Products 🔥
          </h1>

          <p>
            Explore the products everyone
            is talking about this season.
          </p>

        </div>

      </div>

      {/* FEATURED BANNER */}

      <div className="featured-banner">

        <div className="featured-text">

          <p className="section-tag">
            FEATURED DROP
          </p>

          <h2>
            The Future Of Luxury Shopping
          </h2>

          <p>
            Curated collections designed
            for creators, trendsetters,
            and modern lifestyles.
          </p>

        </div>

      </div>

      {/* PRODUCTS */}

      <div className="trending-products">

        <div className="section-header">

          <h2>
            Trending This Week
          </h2>

          <p>
            Premium products gaining attention.
          </p>

        </div>

        <div className="grid">

          {trendingProducts.map((product) => (

            <div
              key={product.id}
              className="trending-card-wrapper"
            >

              <span className="hot-badge">
                🔥 Trending
              </span>

              <ProductCard
                product={product}
              />

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Trending;