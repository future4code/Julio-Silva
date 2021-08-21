import React from "react";
import styled from "styled-components";
import CardPlaylist from "./CardPlaylist";

const PlaylistContainer = styled.div`
  background: lightgrey;
`;

export default class Playlists extends React.Component {
  state = {
    playlists: [],
  };
  render() {
    const listaDeMusicas = this.state.playlists.map((musicas) => {
      return (
        <CardPlaylist
          onchange={this.props.changePagina}
          name={musicas.name}
          key={musicas.id}
        />
      );
    });
    return (
      <PlaylistContainer>       
        {listaDeMusicas}
      </PlaylistContainer>
    );
  }
}
