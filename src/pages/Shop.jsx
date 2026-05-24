import products from "../data/products";
import ProductCard from "../components/ProductCard";
import "./Shop.css";

function Shop() {

  return (
    <section className="shop-page">

      {/* HERO */}

      <div className="shop-hero">

        <div className="shop-overlay"></div>

        <div className="shop-content">

          <p>
            FULL COLLECTION
          </p>

          <h1>
            Explore Realix's
            Premium Selection
          </h1>

          <p className="shop-description">

            Discover curated collections
            of luxury fashion, premium
            technology, accessories,
            and modern lifestyle essentials
            crafted for the next generation.

          </p>

        </div>

      </div>

      {/* FEATURE STRIP */}

      <div className="shop-feature-strip">

        <div className="feature-box">

          <h3>
            Premium Quality
          </h3>

          <p>
            Carefully curated products
            designed for luxury,
            durability, and performance.
          </p>

        </div>

        <div className="feature-box">

          <h3>
            Modern Aesthetics
          </h3>

          <p>
            Clean, timeless, and futuristic
            shopping experiences built
            for modern lifestyles.
          </p>

        </div>

        <div className="feature-box">

          <h3>
            Fast Delivery
          </h3>

          <p>
            Seamless worldwide shipping
            with premium customer support
            and secure checkout.
          </p>

        </div>

      </div>

      {/* PRODUCTS */}

      <div className="shop-products">

        <div className="shop-section-header">

          <p>
            COMPLETE CATALOG
          </p>

          <h2>
            Explore Products
          </h2>

          <span>
            Browse the complete Realix
            luxury collection.
          </span>

        </div>

        <div className="grid">

          {products.map((product) => (

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

export default Shop;