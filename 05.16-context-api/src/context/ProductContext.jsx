import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
export const ProductsContext = createContext(null);

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((res) => {
      setProducts(res.data.products);
    });
  }, []);
  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
