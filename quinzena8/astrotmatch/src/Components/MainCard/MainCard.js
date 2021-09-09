import React, { useState } from "react";
import ChooseProfilePage from "../ChooseProfile/ChooseProfilePage/ChooseProfilePage";
import HeaderCard from "../HeaderCard/HeaderCard";
import MacthListPage from "../MatchListPage/MacthListPage";
import { MainCardContainer } from "./StyleMainCard";

export default function MainCard() {
  const [selectpage, setselectpage] = useState("choose-profile");

  const renderSelectdPage = () => {
    switch (selectpage) {
      case "choose-profile":
        return <ChooseProfilePage />;
      case "macth-List":
        return <MacthListPage />;
      default:
        return <ChooseProfilePage />;
    }
  };

  const goChooseProfilePage = () => {
    setselectpage("choose-profile");
  };
  const goChooseMatchListPage = () => {
    setselectpage("macth-List");
  };

  return (
    <MainCardContainer>
      <HeaderCard
        goChooseProfilePage={goChooseProfilePage}
        goChooseMatchListPage={goChooseMatchListPage}
      />
      {renderSelectdPage()}
    </MainCardContainer>
  );
}
