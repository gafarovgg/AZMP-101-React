import React from "react";
import { products } from "../../data";

const Item = ({ product }) => {
  return <li>{product.title}</li>;
};

export default Item;
