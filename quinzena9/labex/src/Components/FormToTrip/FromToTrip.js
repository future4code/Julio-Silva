import React from "react";
import { FormToTrip } from "./styleFormToTrip";

export default function FromToTrip(props) {
    
  return (
    <FormToTrip>
      <input type="text" placeholder={"Nome"} />
      <input type="text" placeholder={"profissão"} />
      <input type="date" id="birth" />

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
      <input type="submit" onClick={props.applyFroTrip} />
    </FormToTrip>
  );
}
