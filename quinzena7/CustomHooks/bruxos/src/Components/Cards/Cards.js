import React from "react";
import useRequestData from "../../HooksCustom/useRequestData";
import { BaseURL } from "./../../constants/BaseURL";

export default function Cards() {
  const bruxos = useRequestData(BaseURL);

  const listaDeBruxos =
    bruxos &&
    bruxos.map((bruxo, index) => {
      return <li key={index}>{bruxo.name}</li>;
    });
  return <div>{listaDeBruxos}</div>;
}
