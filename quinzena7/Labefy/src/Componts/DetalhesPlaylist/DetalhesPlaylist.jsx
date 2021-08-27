import axios from "axios";
import React from "react";
import { Authoaxios, baseURL } from "../../constants/baseURL";

export default class DetalhesPlaylist extends React.Component {
  state = {
    listaTracks: [],
  };

  getAllTracks = (id) => {
    axios
      .get(`${baseURL}/${id}/tracks`, Authoaxios)
      .then((response) => {
        console.log(response);
        this.setState({ listaTracks: response.data.result.tracks.name });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  render() {
    console.log(this.state.listaTracks);
    const listaTracks = this.state.listaTracks.map((tracks) => {
      return <div key={tracks.id}>{tracks.name}</div>;
    });
    console.log(this.state.listaTracks);
    return (
      <>
        {listaTracks}
        <div>Olá sou a página detalhes</div>
        <button>apagar</button>
        <button>adicionar</button>
      </>
    );
  }
}
