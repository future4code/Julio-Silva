import React from "react";
import styled from "styled-components";
import DetalhesPlaylist from "./DetalhesPlaylist";
import Playlist from "./PlayLists";

export default class EditarPlaylist extends React.Component {
  state = {
    pagina: "playlists",
  };

  changePagina = (alterarPaginas) => {
    this.setState({ pagina: alterarPaginas });
  };
  render() {
    const alterarPagina = () => {
      if (this.state.pagina === "playlists") {
        return <Playlist changePagina={this.changePagina} />;
      } else if (this.state.pagina === "detalhesPlaylists") {
        return <DetalhesPlaylist changePagina={this.changePagina} />;
      }
    };
    return <div>{alterarPagina()}</div>;
  }
}
