import { useState } from "react";
import "./App.css";
import Increase from "./Components/Increase";
import Screen from "./Components/Screen";
import Decrease from "./Components/Decrease";
import Home from "./Components/Home";
import { products } from "./data";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Increase count={count} setCount={setCount} />
      <Screen count={count} />
      <Decrease count={count} setCount={setCount} />
      <hr />
      <Home products={products} />
    </>
  );
}

export default App;
