import "./App.css";
import React, { useEffect, useState, useRef } from "react";
import useAxios from "./useAxios";

const App = () => {
  const { loading, data, error, refetch } = useAxios({
    url: "https://yts.mx/api/v2/list_movies.json",
  });
  console.log(
    `loading:${loading}\ndata:${JSON.stringify(data)}\nerror:${error}`
  );
  return (
    <div>
      <h1>{data && data.status}</h1>
      <h2>{loading ? "Loading" : "done"}</h2>
      <button onClick={refetch}>REFETCH</button>
    </div>
  );
};

export default App;
