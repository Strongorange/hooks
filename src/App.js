import "./App.css";
import React, { useState } from "react";

const App = () => {
  const [item, setItem] = useState(0);
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);
  return (
    <div>
      <span>{item}</span>
      <button onClick={incrementItem}>증가</button>
      <button onClick={decrementItem}>감소</button>
    </div>
  );
};

export default App;
