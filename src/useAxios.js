import { useEffect, useState } from "react";
import axios from "axios";

const useAxios = (options, axiosInstance = axios) => {
  const [trigger, setTrigger] = useState(0);
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });
  useEffect(() => {
    axiosInstance(options)
      .then((data) => {
        setState({
          ...state,
          loading: false,
          data,
        });
      })
      .catch((error) => {
        setState({ ...state, loading: false, error });
      });
  }, [trigger]);

  if (!options.url) {
    return;
  }

  const refetch = () => {
    setState({ ...state, loading: true });
    setTrigger(Date.now());
  };

  return { ...state, refetch };
};

export default useAxios;
