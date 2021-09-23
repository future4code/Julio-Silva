import React from "react";

export default function ButtonsHome(props) {
  return (
    <div>
      <button onClick={props.goToListTrip}>
        <strong >Lista de Viagens</strong>
      </button>
      <button onClick={props.goToLogin}>
        <strong>Area Restrita</strong>
      </button>
    </div>
  );
}
