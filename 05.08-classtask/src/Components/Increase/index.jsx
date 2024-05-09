import React from "react";

const Increase = ({ count, setCount }) => {
  return <button onClick={() => setCount(count + 1)}>Increase</button>;
};

export default Increase;
