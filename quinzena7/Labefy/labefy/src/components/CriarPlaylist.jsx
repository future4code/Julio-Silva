import React from "react";
import styled from "styled-components";
import axios from "axios";
import { axiosConfig, baseURL } from "../constatnts/urls";

const CriarPlaylisFormPage = styled.div`
  display: flex;
  flex-direction: column;
`;
const CirarPlaylistForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  text-align: center;

  input {
    text-align: center;
    margin: 4px 0;
  }
`;
export default class CriarPlaylist extends React.Component {
  state = {
    inputNameValue: "",
  };

  onChagecriarPlaylist = (e) => {
    this.setState({ inputNameValue: e.target.value });
  };

  createPlaylist = (e) => {
    e.preventDefault()
    const body = {
      name: this.state.inputNameValue,
    };

    axios
      .post(baseURL, body, axiosConfig)
      .then((response) => {
        console.log(response);
        this.setState({inputNameValue: ""})
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  render() {
    console.log(this.stat)
    return (
      <CriarPlaylisFormPage>
        <h1>Adicionar Playlist</h1>
        <CirarPlaylistForm onSubmit={this.createPlaylist}>
          <label>Adicionar nova PLaylist</label>
          <input
            placeholder={"Nome da Playlist"}
            type="text"
            value={this.state.inputNamevalue}
            onChange={this.onChagecriarPlaylist}
          />
          <button type="submit">Adicionar</button>
        </CirarPlaylistForm>
      </CriarPlaylisFormPage>
    );
  }
}
