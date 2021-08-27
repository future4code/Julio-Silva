import axios from "axios";
import React from "react";
import { Authoaxios, baseURL } from "../../constants/baseURL";

export default class AdicionaLista extends React.Component {
  state = {
    inputName: "",
  };

  onChangeInputName = (e) => {
    this.setState({ inputName: e.target.value });
  };

  adicionarLista = () => {
    const body = { name: this.state.inputName };
    axios
      .post(baseURL, body, Authoaxios)
      .then(() => {
        alert("Playlist adicionada com sucesso!");
        this.setState({ inputName: "" });
      })
      .catch(() => {
        alert("Algo deu errado, tente novamente");
      });
  };

  render() {
    return (
      <>
        <h2>Olá eu sou o AdicionaLista</h2>
        <button onClick={this.props.vaiPraTelaHome}>Ir para Home</button>
        <input
          placeholder={"Nome da Playlist"}
          value={this.state.inputName}
          onChange={this.onChangeInputName}
        />

        <button onClick={this.adicionarLista}>Adicionar Playlist</button>
      </>
    );
  }
}
