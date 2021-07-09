import "./App.css";
import React, { useEffect, useState, useRef } from "react";

const useBeforeLeave = (onBefore) => {
  const handleMouseLeave = (event) => {
    const { clientY } = event;
    if (clientY <= 0) {
      onBefore();
    }
  };
  useEffect(() => {
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, []);
};

const App = () => {
  const begForLife = () => console.log("떠나지마!");
  useBeforeLeave(begForLife);
  return (
    <div>
      <h1>Hi!</h1>
    </div>
  );
};

export default App;
