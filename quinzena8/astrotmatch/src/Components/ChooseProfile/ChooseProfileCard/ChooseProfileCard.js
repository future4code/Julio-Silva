import React from "react";
import { ChooseProfileContainer } from "./StyleChooseProfileCard";

export default function ChooseProfileCard(props) {
  const profile = props.profile;
  return (
    <ChooseProfileContainer>
      <img src={profile.photo} alt="PhotoPerfil" />
      <p>
        {profile.name}, {profile.age}
      </p>
      <p>{profile.bio}</p>
    </ChooseProfileContainer>
  );
}
