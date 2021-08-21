import React from "react";
import styled from "styled-components";
import CardTracks from "./TrakCard";

const DetalhesPlaylistContainer = styled.div``;
const FormDetalahesLista = styled.div``;

export default class DetalhesPlaylist extends React.Component {
  state = {
    tracks: [],
  };
  render() {
    const tracks = this.state.tracks.map((tracks) => {
      return <CardTracks 
      key={tracks.id}
      trackName={tracks.name}
      artist={tracks.artisti}
      url={tracks.url}
      />
      
    });

    return (
      <DetalhesPlaylistContainer>
        <FormDetalahesLista>
          <div>
            <label>Nome da Música:</label>
            <input />
          </div>
          <div>
            <label>Artista:</label>
            <input />
          </div>
          <div>
            <label>URL</label>
            <input />
          </div>
          <button type="submit">Adicionar Música</button>
        </FormDetalahesLista>
        {tracks}
        <button onClick={() => this.props.changePagina("playlists")}>
          volta playlist
        </button>
      </DetalhesPlaylistContainer>
    );
  }
}
