import React from "react";
import ButtonsHome from "../../Components/ButtonsHome/ButtonsHome";
import { useHistory } from "react-router";

export default function Home() {
  const history = useHistory();

  const goToListTrip = () => {
    history.push("/trips/list");
  };

  const goToLogin =() =>{
    history.push("/login")
  }

  return (
    <div>
        <ButtonsHome goToListTrip={goToListTrip} goToLogin={goToLogin}/>
    </div>
  );
}
