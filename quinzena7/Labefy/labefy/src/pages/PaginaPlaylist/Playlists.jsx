import React from "react";
import axios from "axios";
import { PlaylistsCard } from "./styled";

export default class Playlists extends React.Component {
  state = {
    listaDeMusicas: [],
    inputvalue: "",
  };

  componentDidMount() {
    this.getAllPlaylist();
  }

  getAllPlaylist = () => {
    return axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        {
          headers: {
            Authorization: "julio-silva-johnson",
          },
        }
      )
      .then((response) => {
        this.setState({ listaDeMusicas: response.data.result.list });
      });
  };

  criaNovaPlaylist = () => {
    const body = { name: this.inputvalue };
    return axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        body,
        {
          headers: {
            Authorization: "julio-silva-johnson",
          },
        }
      )
      .then((response) => {
        console.log(response);
        this.setState({ listaDeMusicas: response.data.result.list });
      })

      .catch((err) => {
        console.log(err.response);
      });
  };

  render() {
    return (
      <>
        <div>
          <h1>Playlists</h1>
          {this.state.listaDeMusicas.map((musicas) => {
            return (
              <PlaylistsCard key={musicas.id}>
                {musicas.name}
                <button>Deletar</button>
              </PlaylistsCard>
            );
          })}
        </div>

        <div>
          <button>Criar nova Playlist</button>
          <button>Deletar Playlist</button>
        </div>
      </>
    );
  }
}
