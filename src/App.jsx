import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Checkout from "./pages/Checkout";
import ProductDetails from "./pages/ProductDetails";
import Footer from "./components/Footer";

function App() {

  const [search, setSearch] =
    useState("");

  return (
    <>
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

      </Routes>
      <Footer />
    </>
  );
}

export default App;