import axios from "axios";
import React from "react";
import { URLPutClear } from "../../constants/PUTClear/URLPutClear";
import { ButtonReset } from "./StyleButtonReset";

export default function ResetButton() {
  const onClickClear = () => {
    axios
      .put(URLPutClear)
      .then(() => {
        alert("Lista de Macth apagada com sucesso!");
      })
      .catch(() => {
        alert("Ops, Algo deu errado");
      });
  };

  return (
    <div>
      <ButtonReset onClick={onClickClear}>Reset Matches</ButtonReset>
    </div>
  );
}
