import React, { useState } from "react";
import PropTypes from "prop-types";
const Counter = ({ count, setCount }) => {
  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <button onClick={() => handleIncrement()}>INCREMENT</button>
      <span>{count}</span>
      <button onClick={() => handleDecrement()}>DECREMENT</button>
    </div>
  );
};

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  setCount: PropTypes.func.isRequired,
};

export default Counter;
