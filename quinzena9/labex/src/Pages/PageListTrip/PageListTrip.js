import React from "react";
import { useHistory } from "react-router";
import { BaseUrlGetTrips } from "../../Constants/BaseURL";
import { FetchHookAPI } from "../../CustomHook/FetchHookAPI";
import { StylePageList } from "./StylePageList";

export default function PageListTrip() {
  const history = useHistory();
  const [trip, isLoading, error] = FetchHookAPI(BaseUrlGetTrips);

  const goBack = () => {
    history.goBack();
  };

  const ListTrip =
    trip &&
    trip.map((trip, id) => {
      return (
        <ul key={id}>
          {trip.name}
          {trip.description}
          {trip.durationInDays}
          {trip.planet}
          {trip.durationInDays}
        </ul>
      );
    });

  return (
    <>
      <h1>Lista De Viagens</h1>
      <StylePageList>{ListTrip}</StylePageList>
      {!isLoading && <p>Carregando...</p>}
      {!isLoading && error && <p>Ocorreu um erro!</p>}
      {!isLoading && trip && trip.length > 0 && trip}
      {!isLoading && trip && trip.length === 0 && <p>Não há dados</p>}

      <button onClick={goBack}>Voltar</button>
    </>
  );
}
