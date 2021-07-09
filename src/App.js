import "./App.css";
import React, { useEffect, useState, useRef } from "react";

const useNetwork = (onChange) => {
  const [status, setStatus] = useState(navigator.onLine);
  const handleChange = () => {
    if (typeof onChnge === "function") {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);
  return status;
};

const App = () => {
  const handleNetworkChange = (online) => {
    console.log(online ? "We just went Online" : "We are offline");
  };
  const onLine = useNetwork(handleNetworkChange);
  return (
    <div>
      <h1>{onLine ? "Online" : "Offline"}</h1>
    </div>
  );
};

export default App;
