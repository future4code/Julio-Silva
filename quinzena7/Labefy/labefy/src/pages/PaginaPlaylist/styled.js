import styled from "styled-components";

export const PlaylistsCard = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
  width: 300px;
  button {
    color: #fff;
    background: red;
    font-weight: bold;
    border-radius: 5px;
  }
  &:hover {
    cursor: pointer;
    background: lightgreen;
    button {
      cursor: pointer;
    }
  }
`;
