import React from "react";
import { useHistory } from "react-router";

export default function TripCard(props) {
  const trip = props.trip;
  const history = useHistory();

  const goToFormTrip = () => {
    history.push("/trips/application");
  };

  return (
    <>
      <h2>{trip.name}</h2>
      <h3>{trip.planet}</h3>
      <p>{trip.description}</p>
      <p>{trip.date}</p>
      <p>{trip.durationInDays} - dias</p>
      <button tripid={trip.id} onClick={goToFormTrip}>
        Quero Embarcar
      </button>
    </>
  );
}
