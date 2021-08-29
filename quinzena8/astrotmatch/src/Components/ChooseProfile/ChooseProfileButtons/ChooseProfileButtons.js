import React from "react";
import { ChooseButtonConatiner } from "./ChooseButtonsStyle";
import CancelIcon from "@material-ui/icons/Cancel";
import DoneIcon from "@material-ui/icons/Done";
import { IconButton } from "@material-ui/core";

export default function ChooseProfileButtons(props) {
  return (
    <ChooseButtonConatiner>
      <IconButton>
        <DoneIcon fontSize={"large"} onClick={props.onClickPositive}>
          Curtir
        </DoneIcon>
      </IconButton>
      <IconButton>
        <CancelIcon fontSize={"large"} onClick={props.onClickNegative}>
          Descurtit
        </CancelIcon>
      </IconButton>
    </ChooseButtonConatiner>
  );
}
