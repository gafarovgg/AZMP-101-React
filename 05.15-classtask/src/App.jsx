import { useState } from "react";

import "./App.css";
import Header from "./layout/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProductsProvider from "./context/ProductsContexts";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ProductsProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </ProductsProvider>
    </>
  );
}

export default App;
