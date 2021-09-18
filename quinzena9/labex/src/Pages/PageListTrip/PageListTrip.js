import React from "react";
import { useHistory } from "react-router";
import TripCard from "../../Components/TripCard/TripCard";
import { BaseUrlGetTrips } from "../../Constants/BaseURL";
import { useRequestData } from "../../CustomHook/useRequestData";

export default function PageListTrip() {
  const history = useHistory();
  const [trip, isLoading, error] = useRequestData(BaseUrlGetTrips);

  const goBack = () => {
    history.goBack();
  };

  return (
    <>
      <h1>Lista De Viagens</h1>
      {trip &&
        trip.map((trip, id) => {
          return (
            <ul>
              <TripCard key={id} trip={trip} />
            </ul>
          );
        })}
      {!isLoading && <p>Carregando...</p>}
      {!isLoading && error && <p>Ocorreu um erro!</p>}
      {!isLoading && trip && trip.length > 0 && trip}
      {!isLoading && trip && trip.length === 0 && <p>Não há dados</p>}

      <button onClick={goBack}>Voltar</button>
  
   
    </>
  );
}
