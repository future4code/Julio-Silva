import axios from "axios";
import React from "react";

export default class PlaylistUsuario extends React.Component {
  state = {
    name: "",
  };

  handleName = (e) => {
    this.setState({ name: e.target.value });
  };

  createPlaylist = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
    const body = {
      name: this.state.name,
    };
    axios
      .post(url, body, {
        Autorization: "julio-silva-johnson",
      })
      .then((resp) => {
        console.log(resp);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <h2>PlayList Usuário</h2>
        <button onClick={this.props.paginaPlaylists}>ir para playlist</button>
        <input          
          placeholder={"Digite o nome da Playlist"}
          onchangeName={this.state.handleName}
          value={this.state.value}
        />
        <button onClick={this.createPlaylist}>Criar Nova Playst</button>
      </div>
    );
  }
}
