import React from "react";
import { useHistory } from "react-router";

export default function PageListTrip() {
  const history = useHistory();

  const goToHome = () => {
    history.push("/");
  };
  return (
    <div>
      <h1>Lista de Viagens</h1>
      <h3>form para viagens</h3>
      <button onClick={goToHome}>Voltar</button>
    </div>
  );
}
