import React from "react";
import CreateTrip from "../Components/CreateTrip/CreateTrip";
import TripDetails from "../Components/TripDetails/TripDetails";

export default function AdminHome() {
  return (
    <div>
      <CreateTrip />
      <TripDetails />
    </div>
  );
}
