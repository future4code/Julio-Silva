import axios from "axios";
import { useState, useEffect } from "react";

export const FetchHookAPI = (url) => {
  const [data, setdata] = useState(undefined);
  const [isLoading, setisLoading] = useState(false);
  const [error, seterror] = useState("");

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setisLoading(true);
        setdata(res.data.trips);
        console.log(res.data);
      })
      .catch((err) => {
        setisLoading(false);
        seterror(err);
        alert("Desculpe, algo deu errado!");
      });
  }, [url]);
  return [data, isLoading, error];
};
