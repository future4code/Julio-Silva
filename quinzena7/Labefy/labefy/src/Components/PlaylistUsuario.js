import axios from "axios";
import React from "react";

export default class PlaylistUsuario extends React.Component {
  state = {
    playlists: [],
    name: "",
  };

  onchangeName = (e) => {
    this.setState({ name: e.target.value });
  };

  createPlaylist = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
    const body = {
      name: this.state.inputValue,
    };

    axios
      .post(url, body, {
        headers: {
          Authorization: "julio-silva-johnson",
        },
      })
      .then(() => {
        this.getAllPlaylists().then((response) => {
          this.setState({ inputValue: "" });
          this.setState({ playlists: response.data.result.list });
          alert("Playlist Adicionada com sucesso !");
        });
      })
      .catch((err) => {
        console.log("deu errado", err);
      });
  };

  render() {
    console.log(this.state.name);
    return (
      <div>
        <h2>PlayList Usuário</h2>
        <button onClick={this.props.paginaPlaylists}>ir para playlist</button>
        <input
          placeholder={"Digite o nome da Playlist"}
          onchangeName={this.state.onchangeName}
          value={this.state.value}
        />
        <button onClick={this.createPlaylist}>Salvar Playst</button>
      </div>
    );
  }
}
