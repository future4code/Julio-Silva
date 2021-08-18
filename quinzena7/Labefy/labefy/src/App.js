import React from "react";
import Playlists from "./Components/PlayLists";
import PlaylistUsuario from "./Components/PlaylistUsuario";

export default class App extends React.Component {
  state = {
    telaAtual: "minhaplaylist",
  };

  selecionaTela = () => {
    switch (this.state.telaAtual) {
      case "playlist":
        return <Playlists paginaMinhaPlaylist={this.paginaMinhaPlaylist} />;
      case "minhaplaylist":
        return <PlaylistUsuario paginaPlaylists={this.paginaPlaylists} />;
      default:
        return <div>erro</div>;
    }
  };

  paginaPlaylists = () => {
    this.setState({ telaAtual: "playlist" });
  };
  paginaMinhaPlaylist = () => {
    this.setState({ telaAtual: "minhaplaylist" });
  };

  render() {
    return <>{this.selecionaTela()}</>;
  }
}
