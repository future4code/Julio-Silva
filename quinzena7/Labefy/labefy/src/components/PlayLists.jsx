import React from "react";
import styled from "styled-components";
import CardPlaylist from "./CardPlaylist";
import axios from "axios";
import { axiosConfig, baseURL } from "../constatnts/urls";




const PlaylistContainer = styled.div`
  background: lightgrey;
`;

export default class Playlists extends React.Component {
  state = {
    playlists: [],
  }
    componentDidMount =()=>{
      this.getPAlllaylists()
    }
    

    getPAlllaylists = () => {
      axios.get(baseURL,axiosConfig).then((response) => {
        this.setState({playlists: response.data.result.list })
        console.log(response)
      }).catch((err) => {
        console.log(err.response)
      })
    }
   
  render() {
    const listaDeMusicas = this.state.playlists.map((musicas) => {
      return (
        <CardPlaylist
          onchange={this.props.changePagina}
          name={musicas.name}
          key={musicas.id}
        />
      );
    });
    return (
      <PlaylistContainer>       
        {listaDeMusicas}
      </PlaylistContainer>
    );
  }
}
