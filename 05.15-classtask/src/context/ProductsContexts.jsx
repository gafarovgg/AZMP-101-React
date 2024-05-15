import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import axios from "axios";
export const ProductsContext = createContext(null);




const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setProducts(res.data);
    });
  }, []);
  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
