import React from "react";
import Item from "../Item";

const List = () => {
  return (
    <div>
      <ul>
        {products &&
          products.map((product) => {
            return <Item product={product} key={product.id} />;
          })}
      </ul>
      <Item />
    </div>
  );
};

export default List;
