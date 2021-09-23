import axios from "axios";
import { useState, useEffect } from "react";

export const PostHookAPI = (url) => {
  const [apply, setapply] = useState(undefined);
  const [isLoading, setisLoading] = useState(false);
  const [error, seterror] = useState("");

  useEffect(() => {
    axios
      .post(url)
      .then((res) => {
        setisLoading(true);
        setapply(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        setisLoading(false);
        seterror(err);
        alert("Desculpe, algo deu errado!");
      });
  }, [url]);
  return [apply, isLoading, error];
};