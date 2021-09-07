import axios from "axios";
import { useEffect, useState } from "react";

export default function useRequestData(url) {
  const [data, setdata] = useState(undefined);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
          setdata(res.data)
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [url]);
  return data;
}
