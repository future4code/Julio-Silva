import React from "react";
import styled from "styled-components";

const CardPlaylistContainer = styled.div`
  color: blue;
`;

export default class CardTracks extends React.Component {
  render() {
    return (
      <CardPlaylistContainer>
        <p>{this.props.trackName}</p>
        <p>{this.props.artist}</p>
        <p>{this.props.url}</p>
        <p>X</p>
        <audio controls="controls">
          <source src={this.props.url} type="audio/ogg" />
        </audio>
      </CardPlaylistContainer>
    );
  }
}
