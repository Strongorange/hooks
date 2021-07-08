import "./App.css";
import React, { useState } from "react";

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    console.log(event.target);
  };
  return { value, onChange };
};

const App = () => {
  const name = useInput("Mr.");
  return (
    <div>
      <span>Hello</span>
      <input placeholder="이름" {...name} />
    </div>
  );
};

export default App;
