import { useState } from "react";

import "./App.css";
import Header from "./layouts/header";
import Main from "./components/main";
import Footer from "./layouts/footer";
import { students } from "./data";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Header />
        <Main students={students} />
        <Footer />
      </div>
    </>
  );
}

export default App;
