import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { useProtetionPage } from "../../CustomHook/useProtetionPage";

export default function TripDetails() {
  const [candidates, setcandidates] = useState();
  const [approved, setapproved] = useState();
  useProtetionPage();

  const history = useHistory();

  const goToHome = () => {
    history.push("/");
  };

  const goToDetailPage = (id) => {
    history.push(`/tripdetail/${id}`);
  };

  useEffect(() => {
    const id = Math.random;
    const token = localStorage.getItem("token");
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/julio-silva/trip/${id}`,
        {
          headers: {
            auth: token,
          },
        }
      )
      .then((res) => {
        setcandidates(res.data.trip.candidates);
        setapproved(res.data.trip.approved);
      });
  }, []);

  return (
    <div>
      <h1>Lista de Viagens/Candidatos</h1>
      {candidates &&
        candidates.map((item, id) => {
          return (
            <li key={id}>
              Nome do candidato: {item.name}
              Texto de Apresentação: {item.applicationText}
              Profissão: {item.profession}
              Data de Nascimento: {item.age}
            </li>
          );
        })}
      <button onClick={goToHome}>Voltar a Home</button>
    </div>
  );
}
