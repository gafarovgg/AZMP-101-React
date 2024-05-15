import React from "react";
import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContexts";

const Home = () => {
  const { products, setProducts } = useContext(ProductsContext);
  return (
    <div>
      <ul>
        {products &&
          products.map((p) => {
            return (
              <li key={p.id}>
                <span>{p.price}</span>
                <span>{p.title}</span>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Home;
