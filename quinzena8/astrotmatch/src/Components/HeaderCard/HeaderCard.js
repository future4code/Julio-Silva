import React from "react";
import { HeaderCardContainer } from "./styleHaerderCard";

export default function HeaderCard(props) {
  return (
    <HeaderCardContainer>
      <button onClick={props.goChooseProfilePage}>Escolher</button>
      <img src={"https://picsum.photos/30/30"} alt="Logo" />
      <button onClick={props.goChooseMatchListPage}>Lista Match</button>
    </HeaderCardContainer>
  );
}
