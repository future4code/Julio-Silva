import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background: limegreen;
`;

const Buttons = styled.div`
  display: flex;
  width: 250px;
  justify-content: space-between;
  margin: 8px;
`;

export default class AdicionarPlaylist extends React.Component {
  render() {
    return (
      <HeaderContainer>
        <h1>Logo</h1>
        <Buttons>
          <button onClick={() => this.props.changePagina("criarPlalyst")}>
            Cadastrar Playlist
          </button>
          <button onClick={() => this.props.changePagina("editarPlaylist")}>
            Editar Playlist
          </button>
        </Buttons>
      </HeaderContainer>
    );
  }
}
