import React from "react";
import { useHistory } from "react-router";

export default function CreateNewTripCard() {
  const history = useHistory();

  const goTocreateNewTrip = () => {
    history.push("/admin/trips/create");
  };

  const goToDetailPage = () => {
    history.push("/tripdetail/:id");
  };

  return (
    <div>
      função de criar nova trip
      <button onClick={goTocreateNewTrip}>Criar nova Vaigem</button>
      <button onClick={goToDetailPage}>Detalhes da Viagem</button>
    </div>
  );
}
