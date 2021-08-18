import axios from "axios";
import React from "react";

export default class Playlists extends React.Component {
  state = {
    playlists: [],
    inputvalue: "",
  };

  getAllPlaylists = () => {
    return axios.get(
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
      {
        headers: {
          Authorization: "julio-silva-johnson",
        },
      }
    );
  };

  onClickCriarPlaylist = () => {
    return axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        {
          name: this.state.inputValue,
        },
        {
          headers: {
            Authorization: "julio-silva-johnson",
          },
        }
      )
      .then(() => {
        this.getAllPlaylists().then((response) => {
          this.setState({ inputValue: "" });
          this.setState({ playlists: response.data.result.list });
        });
      });
  };

  onValueChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  componentDidMount = () => {
    this.getAllPlaylists().then((response) => {
      this.setState({ playlists: response.data.result.list });
    });
  };

  render() {
    return (
      <>
        <div>
          <h1>Playlists</h1>
          {this.state.playlists.map((playlist, i) => {
            return <p key={i}>{playlist.name}</p>;
          })}
          <input value={this.state.inputValue} onChange={this.onValueChange} />
          <div>
            <button onClick={this.onClickCriarPlaylist}>Criar Playlist</button>
            <button onClick={this.props.paginaMinhaPlaylist}>
              Ir para mina playlists
            </button>
          </div>
        </div>
      </>
    );
  }
}
