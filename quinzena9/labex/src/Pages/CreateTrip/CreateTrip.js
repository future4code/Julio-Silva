import React from "react";
import axios from "axios";

import useForm from "../../CustomHook/useForm";

export default function CreateTrip() {
  const { form, onChange, cleanFields } = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: "",
  });

  const createNewTrip = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    console.log("criando viagem");
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/julio-silva/trips",
        form,
        {
          headers: {
            auth: token,
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res.trip);
        cleanFields();
      })
      .catch((e) => {
        console.log(e.message);
      });
  };
  return (
    <div>
      <h1>Criar nova Viagem</h1>
      <form onSubmit={createNewTrip}>
        <input
          type="text"
          placeholder={"Nome"}
          value={form.name}
          name={"name"}
          onChange={onChange}
          required
        />
        <input
          type="text"
          placeholder={"Planeta"}
          value={form.planet}
          name={"planet"}
          onChange={onChange}
          required
        />
        <input
          type="text"
          placeholder={"Descrição"}
          value={form.description}
          name={"description"}
          onChange={onChange}
          required
        />
        <input
          type="number"
          placeholder={"Tempo da Viagem em dias"}
          value={form.durationInDays}
          name={"durationInDays"}
          onChange={onChange}
          required
        />
        <input
          type="date"
          value={form.date}
          name={"date"}
          onChange={onChange}
          required
        />
        <button>Criar Viagem</button>
      </form>
    </div>
  );
}
