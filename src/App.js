import "./App.css";
import React, { useEffect, useState, useRef } from "react";

const useFullscreen = (onFullScreen) => {
  const element = useRef();
  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen();
      if (onFullScreen && typeof onFullScreen === "function") {
        onFullScreen(true);
      }
    }
  };
  const exitFull = () => {
    document.exitFullscreen();
    if (onFullScreen && typeof onFullScreen === "function") {
      onFullScreen(false);
    }
  };
  return { element, triggerFull, exitFull };
};

const App = () => {
  const onFullScreen = (isFull) => {
    console.log(isFull ? "we are full" : "we are small");
  };
  const { element, triggerFull, exitFull } = useFullscreen(onFullScreen);
  return (
    <div style={{ height: "1000vh" }}>
      <div ref={element}>
        <img src="https://i.ibb.co/R6RwNxx/grape.jpg" alt="grape" width="250" />
        <button onClick={triggerFull}>전체화면</button>
        <button onClick={exitFull}>전체화면 나가기</button>
      </div>
    </div>
  );
};

export default App;
