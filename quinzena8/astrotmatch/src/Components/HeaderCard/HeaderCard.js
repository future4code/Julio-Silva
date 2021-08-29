import React from "react";
import { HeaderCardContainer } from "./styleHaerderCard";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import RestorePageIcon from "@material-ui/icons/RestorePage";
import { IconButton } from "@material-ui/core";

export default function HeaderCard(props) {
  return (
    <HeaderCardContainer>
      <IconButton>
        <RestorePageIcon fontSize={"large"} onClick={props.goChooseProfilePage}>
          Escolher
        </RestorePageIcon>
      </IconButton>

      <img
        src={
          "https://www.maenner.media/downloads/61707/download/tinder_RainbowFlame.jpg?cb=19f0fecf725019fea14042a78e85000a&w=1200"
        }
        alt="Logo"
      />
      <IconButton>
        <PeopleAltIcon fontSize={"large"} onClick={props.goChooseMatchListPage}>
          Lista Match
        </PeopleAltIcon>
      </IconButton>
    </HeaderCardContainer>
  );
}
