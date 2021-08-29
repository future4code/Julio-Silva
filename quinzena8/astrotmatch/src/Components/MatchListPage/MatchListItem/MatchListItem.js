import React from "react";
import { ItemList } from "./StyleMatchListItem";

export default function MatchListItem(props) {
  const person = props.person
  return (
    <ItemList>
      <img src={person.photo} alt="fotoPerfil" />
      <p>{person.name}</p>
    </ItemList>
  );
}
