import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Checkout from "./pages/Checkout";
import ProductDetails from "./pages/ProductDetails";
import NewArrivals from "./pages/NewArrivals";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Support from "./pages/Support";
import Careers from "./pages/Careers";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Shipping from "./pages/Shipping";
import Refunds from "./pages/Refunds";
import Trending from "./pages/Trending";
import Collections from "./pages/Collections";
import Accessories from "./pages/Accessories";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

function App() {

  const [search, setSearch] =
    useState("");

  return (
    <>
    
    <ScrollToTop />

      <Navbar
        search={search}
        setSearch={setSearch}
      />

      <Routes>

        <Route
          path="/"
          element={
            <Home search={search} />
          }
        />

        <Route
          path="/cart"
          element={<Cart />}
        />

        <Route
          path="/wishlist"
          element={<Wishlist />}
        />

        <Route
          path="/checkout"
          element={<Checkout />}
        />

        <Route
          path="/product/:id"
          element={<ProductDetails />}
        />

        <Route
          path="/new-arrivals"
          element={<NewArrivals />}
        />

        <Route
          path="/shop"
          element={<Shop />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="/support"
          element={<Support />}
        />

        <Route
          path="/careers"
          element={<Careers />}
        />

        <Route
          path="/privacy"
          element={<Privacy />}
        />

        <Route
          path="/terms"
          element={<Terms />}
        />

        <Route
          path="/shipping"
          element={<Shipping />}
        />

        <Route
          path="/refunds"
          element={<Refunds />}
        />

        <Route
          path="/trending"
          element={<Trending />}
        />

        <Route
          path="/collections"
          element={<Collections />}
        />

        <Route
          path="/accessories"
          element={<Accessories />}
        />

      </Routes>
      <Footer />
    </>
  );
}

export default App;