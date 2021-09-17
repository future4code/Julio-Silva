import axios from "axios";
import React from "react";
import { useHistory } from "react-router-dom";

import useForm from "../../CustomHook/useForm";

function AplicationForm() {
  const history = useHistory();
  const { form, onChange, cleanFields } = useForm({
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "",
  });

  const apllyToTrip = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/julio-silva/trips/:id/apply",
        form
      )
      .then(() => {
        alert("Formulário enviado com sucesso!");
        history.push("/listTrip");
        cleanFields();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <h1>Formulário de inscrção</h1>
      <form onSubmit={apllyToTrip}>
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
          placeholder={"profissão"}
          value={form.profession}
          name={"profession"}
          onChange={onChange}
          required
        />
        <input
          type="date"
          value={form.age}
          name={"age"}
          onChange={onChange}
          required
        />

        <select
          name={"country"}
          value={form.country}
          onChange={onChange}
          required
        >
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
          value={form.applicationText}
          name={"applicationText"}
          type="text"
          placeholder={"Descreva o porque devemos te escolher"}
          onChange={onChange}
          required
        />
        <button>Enviar Formulário</button>
      </form>
    </div>
  );
}
export default AplicationForm;
