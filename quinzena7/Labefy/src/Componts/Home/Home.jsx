import axios from "axios";
import React from "react";

import { Authoaxios, baseURL } from "../../constants/baseURL";

export default class Home extends React.Component {
  state = {
    listaPlaylist: [],
  };

  getAllPlaylists = () => {
    axios
      .get(baseURL, Authoaxios)
      .then((response) => {
        this.setState({ listaPlaylist: response.data.result.list });
      })
      .catch(() => {
        alert(
          "Tivemos problemos em achar a playslist tente novamente mais tarde"
        );
      });
  };

  deletarPlaylist = (id) => {
    axios
      .delete(`${baseURL}/${id}`, Authoaxios)
      .then(() => {
        this.getAllPlaylists();
        alert("Playlist apagada com sucesso!");
      })
      .catch(() => {
        alert("Ops, Algo deu errado");
      });
  };
  

  componentDidMount = () => {
    this.getAllPlaylists();
  };

  render() {
    const listPlaylist = this.state.listaPlaylist.map((musicas) => {
      return (
        <div key={musicas.id}>
          {musicas.name}
          <button onClick={this.props.vaiPraDetalhes}>Detalhes</button>
          <button onClick={() => this.deletarPlaylist(musicas.id)}>
            Deletar
          </button>
        </div>
      );
    });
    return (
      <>
        <h2>Eu sou o Home</h2>
        {listPlaylist}
        <button onClick={this.props.vaiPraTelaAddLista}>Ir para Lista</button>
      </>
    );
  }
}
