import React from "react";
import Home from "./Componts/Home/Home";
import AdicionaLista from "./Componts/AdicionaLista/AdicionaLista";
import DetalhesPlaylist from "./Componts/DetalhesPlaylist/DetalhesPlaylist";

export default class App extends React.Component {
  state = {
    paginaAtual: "Home",
  };

  alteraPagina = () => {
    switch (this.state.paginaAtual) {
      case "Home":
        return <Home vaiPraTelaAddLista={this.vaiPraTelaAddLista} />;
      case "AdicionaLista":
        return <AdicionaLista vaiPraTelaHome={this.vaiPraTelaHome} />;
      case "Detalhes":
        return <DetalhesPlaylist vaiPraDetalhes={this.vaiPraDetalhes} />;
      default:
        return "Erro: Página não enconotrada!";
    }
  };

  vaiPraTelaHome = () => {
    this.setState({ paginaAtual: "Home" });
  };
  vaiPraTelaAddLista = () => {
    this.setState({ paginaAtual: "AdicionaLista" });
  };

  vaiPraDetalhes = () => {
    this.setState({ paginaAtual: "Detalhes" });
  };

  render() {
    return <div>{this.alteraPagina()};</div>;
  }
}
