import "./App.css";
import React, { useEffect, useState, useRef } from "react";

const useConfirm = (message = "", callback, rejection) => {
  if (!callback || typeof callback !== "function") {
    return;
  }
  if (rejection && typeof rejection !== "function") {
    return;
  }
  const confirmAction = () => {
    if (window.confirm(message)) {
      callback();
    } else {
      rejection();
    }
  };
  return confirmAction;
};

const App = () => {
  const deleteWorld = () => console.log("삭제미!!!!");
  const abort = () => console.log("취소미!!!");
  const confirmDelete = useConfirm("Are you sure?", deleteWorld, abort);
  return (
    <div>
      <button onClick={confirmDelete}>삭제미</button>
    </div>
  );
};

export default App;
