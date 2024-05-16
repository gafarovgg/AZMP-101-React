import { useState } from "react";

import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Header from "./layouts/Header";
import Wishlist from "./pages/Wishlist";
import Products from "./pages/Products";
import ProductsProvider from "./context/ProductContext";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ProductsProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
      </ProductsProvider>
    </>
  );
}
export default App;
