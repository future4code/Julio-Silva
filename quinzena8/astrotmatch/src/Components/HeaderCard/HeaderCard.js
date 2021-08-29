import React from "react";
import { HeaderCardContainer } from "./styleHaerderCard";

export default function HeaderCard() {
  return (
    <HeaderCardContainer>
      <button>Escolher</button>
      <img src={"https://picsum.photos/30/30"} alt="Logo" />
      <button>Lista Match</button>
    </HeaderCardContainer>
  );
}
