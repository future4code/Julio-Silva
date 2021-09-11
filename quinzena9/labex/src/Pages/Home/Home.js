import React from "react";
import ButtonsHome from "../../Components/ButtonsHome/ButtonsHome";
import { useHistory } from "react-router";

export default function Home() {
  const history = useHistory();

  const goToListTrip = () => {
    history.push("/listTrip");
  };

  return (
    <div>
      <ButtonsHome goToListTrip={goToListTrip} />
    </div>
  );
}
