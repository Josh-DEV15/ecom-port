import products from "../data/products";
import ProductCard from "../components/ProductCard";
import "./NewArrivals.css";

function NewArrivals() {


  const newProducts =
    products.slice(-4);

  return (
    <section className="new-arrivals-page">

      {/* HERO */}

      <div className="arrivals-hero">

        <div className="arrivals-overlay"></div>

        <div className="arrivals-content">

          <p className="arrivals-tag">
            JUST DROPPED
          </p>

          <h1>
            New Arrivals ✨
          </h1>

          <p>
            Discover the latest additions
            curated for modern luxury.
          </p>

        </div>

      </div>

      {/* PRODUCTS */}

      <div className="arrivals-products">

        <div className="arrivals-header">

          <h2>
            Latest Collection
          </h2>

          <p>
            Fresh products crafted for
            premium experiences.
          </p>

        </div>

        <div className="grid">

          {newProducts.map((product) => (

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

export default NewArrivals;