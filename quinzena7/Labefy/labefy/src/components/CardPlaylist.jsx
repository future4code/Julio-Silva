import React from "react";
import styled from "styled-components";

const CardPlaylistContainer = styled.div`
  color: blue;
`;

export default class CardPlaylist extends React.Component {
  render() {
    return (
      <CardPlaylistContainer>
        <button onClick={() => this.props.changePagina("detalhesPlaylists")}>
          Abrir essa playlist
        </button>
        <p>{this.props.name}</p>
        <p>X</p>
      </CardPlaylistContainer>
    );
  }
}
