import axios from "axios";
import { useEffect, useState } from "react";

export default function useRequestData(url) {
  const [data, setdata] = useState(undefined);
  const [isLoading, setisLoading] = useState(false);
  const [error, seterror] = useState("");

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setisLoading(true);
        setdata(res.data);
      })
      .catch((err) => {
        setisLoading(false);
        seterror(err);
        alert("Desculpe, algo deu errado!");
      });
  }, [url]);
  return [data, isLoading, error];
}
