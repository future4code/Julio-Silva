import React from "react";

export default class Playlists extends React.Component {
    



  render() {
    return (
      <div>
        <h2>PlayList</h2>
        <button onClick ={this.props.paginaMinhaPlaylist}>Ir para mina playlists</button>
      </div>
    );
  }
}
