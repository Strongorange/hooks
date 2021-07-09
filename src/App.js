import "./App.css";
import React, { useEffect, useState, useRef } from "react";

const useFadeIn = (duration = 1, delay = 0) => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, []);
  return { ref: element, style: { opacity: 0 } };
};

const App = () => {
  const fadeInH1 = useFadeIn(2, 2);
  const fadeInP = useFadeIn(5, 3);
  return (
    <div>
      <h1 {...fadeInH1}>Hi!</h1>
      <p {...fadeInP}>우와아아아우!!!</p>
    </div>
  );
};

export default App;
