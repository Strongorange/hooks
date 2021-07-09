import "./App.css";
import React, { useState } from "react";

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

const App = () => {
  const maxLen = (value) => value.length <= 10;
  const name = useInput("Mr.", maxLen);
  const email = useInput("@");
  return (
    <div>
      <span>Hello</span>
      <input placeholder="이름" {...name} />
      <input placeholder="이메일" {...email} />
    </div>
  );
};

export default App;
