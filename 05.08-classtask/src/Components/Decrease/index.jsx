import React from "react";

const Decrease = ({ count, setCount }) => {
  return <button onClick={() => setCount(count - 1)}>Decrease</button>;
};

export default Decrease;
