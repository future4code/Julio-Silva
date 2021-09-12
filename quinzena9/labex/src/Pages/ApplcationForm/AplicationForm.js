import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import FromToTrip from "../../Components/FormToTrip/FromToTrip";

export default function AplicationForm(props) {
  const [apply, setapply] = useState({});

  useEffect(() => {}, []);

  const body = {
    name: "Julio jkj",
    age: 30,
    applicationText: "Quero muuuuuuito ir!!!",
    profession: "Peão",
    country: "zelândia",
  };

  const headers = {
    HEADERS: {
      "Content-Type": "application/json",
    },
  };

  const applyFroTrip = () => {
    axios
      .post(
        "https:us-central1-labenu-apis.cloudfunctions.net/labeX/julio-silva-johnson/trips/2/apply",
        body,
        headers
      )
      .then((res) => {
        console.log(res.data.message);
        setapply(res.data.message);
        alert("Inscrição realizada com sucesso!");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <FromToTrip applyFroTrip={applyFroTrip}/>

      {/* {!isLoading && <p>Carregando...</p>}
      {!isLoading && error && <p>Ocorreu um erro!</p>}
      {!isLoading && apply && apply.length > 0 && apply}
      {!isLoading && apply && apply.length === 0 && <p>Não há dados</p>} */}
    </div>
  );
}