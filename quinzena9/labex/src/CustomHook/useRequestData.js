import axios from "axios";
import { useState, useEffect } from "react";

export const useRequestData = (url) => {
  const [data, setdata] = useState(undefined);
  const [isLoading, setisLoading] = useState(false);
  const [error, seterror] = useState("");

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setisLoading(true);
        setdata(res.data.trips);       
      })
      .catch((err) => {
        setisLoading(false);
        seterror(err);
        alert("Desculpe, algo deu errado!");
      });
  }, [url]);
  return [data, isLoading, error];
};
