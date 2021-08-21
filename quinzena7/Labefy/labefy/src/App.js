import React from "react";
import Header from "./components/HeaderPage";
import styled from "styled-components";
import CriarPlaylist from "./components/CriarPlaylist";
import EditarPlaylist from "./components/EditarPlaylist";

const AppContainer = styled.div`
  width: 100vw;
`;

export default class App extends React.Component {
  state = {
    alterarPaginas: "criarPlalyst",
  };

  changePagina = (alterarPaginas) => {
    this.setState({ alterarPaginas: alterarPaginas });
  };
  render() {
    const alterarPaginas = () => {
      if (this.state.alterarPaginas === "criarPlalyst") {
        return <CriarPlaylist />;
      } else if (this.state.alterarPaginas === "editarPlaylist") {
        return <EditarPlaylist />;
      }
    };
    return (
      <AppContainer>
        <Header changePagina={this.changePagina} />
        {alterarPaginas()}
      </AppContainer>
    );
  }
}
