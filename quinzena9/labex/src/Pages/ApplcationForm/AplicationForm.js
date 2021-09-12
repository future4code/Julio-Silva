import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

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
      <input type="text" placeholder={"Nome"} />
      <input type="text" placeholder={"idade"} />
      <input type="text" placeholder={"profissão"} />
      <select name="estado">
        <option value="estado">Selecione o Estado</option>
        <option value="ac">Acre</option>
        <option value="al">Alagoas</option>
        <option value="am">Amazonas</option>
        <option value="ap">Amapá</option>
        <option value="ba">Bahia</option>
        <option value="ce">Ceará</option>
        <option value="df">Distrito Federal</option>
        <option value="es">Espírito Santo</option>
        <option value="go">Goiás</option>
        <option value="ma">Maranhão</option>
        <option value="mt">Mato Grosso</option>
        <option value="ms">Mato Grosso do Sul</option>
        <option value="mg">Minas Gerais</option>
        <option value="pa">Pará</option>
        <option value="pb">Paraíba</option>
        <option value="pr">Paraná</option>
        <option value="pe">Pernambuco</option>
        <option value="pi">Piauí</option>
        <option value="rj">Rio de Janeiro</option>
        <option value="rn">Rio Grande do Norte</option>
        <option value="ro">Rondônia</option>
        <option value="rs">Rio Grande do Sul</option>
        <option value="rr">Roraima</option>
        <option value="sc">Santa Catarina</option>
        <option value="se">Sergipe</option>
        <option value="sp">São Paulo</option>
        <option value="to">Tocantins</option>
      </select>

      <textarea
        type="text"
        placeholder={"Descreva o porque devemos te escolher"}
      />
      <input type="submit" />

      {/* {!isLoading && <p>Carregando...</p>}
      {!isLoading && error && <p>Ocorreu um erro!</p>}
      {!isLoading && apply && apply.length > 0 && apply}
      {!isLoading && apply && apply.length === 0 && <p>Não há dados</p>} */}
    </div>
  );
}
