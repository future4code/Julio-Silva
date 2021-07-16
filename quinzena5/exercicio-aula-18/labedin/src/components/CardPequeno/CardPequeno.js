import React from "react";
import "./CardPequeno.css";

function CardPequeno(props) {
  return (
    <div className="small-card">
      <img src={props.imagem} />

      <p>{props.titulo}</p>
      <p>{props.texto}</p>
    </div>
  );
}

export default CardPequeno;
