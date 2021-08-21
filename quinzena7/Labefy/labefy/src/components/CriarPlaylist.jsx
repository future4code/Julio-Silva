import React from "react";
import styled from "styled-components";

const CriarPlaylisFormPage = styled.div`
  display: flex;
  flex-direction: column;
`;
const CirarPlaylistForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  text-align: center;

  input {
    text-align: center;
    margin: 4px 0;
  }
`;
export default class CriarPlaylist extends React.Component {
  render() {
    return (
      <CriarPlaylisFormPage>
        <h1>Adicionar Playlist</h1>
        <CirarPlaylistForm>
          <label>Adicionar nova PLaylist</label>
          <input placeholder={"Nome da Playlist"} />
          <button type="submit">Adicionar</button>
        </CirarPlaylistForm>
      </CriarPlaylisFormPage>
    );
  }
}
