import React from "react";
import useRequestData from "../../HooksCustom/useRequestData";
import { BaseURL } from "./../../constants/BaseURL";

export default function Cards() {
  const [data, isLoading, error] = useRequestData(BaseURL);

  const listaDeBruxos =
    data &&
    data.map((bruxo, index) => {
      return <li key={index}>{bruxo.name}</li>;
    });
  return (
    <>
      <h1>Lista de Bruxos de Harry Potter</h1>
      {!isLoading && <p>Carregando...</p>}
      {!isLoading && error && <p>Ocorreu um erro!</p>}
      {!isLoading && data && data.length > 0 && data}
      {!isLoading && data && data.length === 0 && <p>Não há dados</p>}
      {listaDeBruxos}
    </>
  );
}
