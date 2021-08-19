import React from "react";

import Playlists from "./pages/PaginaPlaylist/Playlists";
import DetalhesPlaylist from "./pages/PaginaDetalhes/DetalhesPlaylist";

export default class App extends React.Component {
  state = {
    pagina: "playlist",
  };

  selecionaPagina = () => {
    switch (this.state.pagina) {
      case "playlist":
        return <Playlists />;
      case "Detalhes":
        return <DetalhesPlaylist />;
      default:
        return <Playlists />;
    }
  };

  

  render() {
    return <>{this.selecionaPagina()}
      
    </>;
  }
}
