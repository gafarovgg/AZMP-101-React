import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./layouts/Header";
import { Route, Routes } from "react-router";
import Home from "./pages/Client/Home";
import About from "./pages/Client/About";
import Contact from "./pages/Client/Contact";
import Product from "./pages/Client/Product";
import Dashboard from "./pages/Admin/Dashboard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />/
        <Route path="/admin" element={<Dashboard />} />/
        <Route path="/about" element={<About />} />/
        <Route path="/contact" element={<Contact />} />/
        <Route path="/product" element={<Product />} />/
      </Routes>
    </>
  );
}

export default App;
