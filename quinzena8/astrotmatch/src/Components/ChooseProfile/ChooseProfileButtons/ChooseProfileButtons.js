import React from "react";
import { ChooseButtonConatiner } from "./ChooseButtonsStyle";

export default function ChooseProfileButtons(props) {
  return (
    <ChooseButtonConatiner>
      <button onClick={props.onClickPositive}>Curtir</button>
      <button onClick={props.onClickNegative}>Descurtit</button>
    </ChooseButtonConatiner>
  );
}
