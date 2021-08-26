import styled from "styled-components";

export const CardPokemon = styled.div`
  width: 40vw;
  height: 60vh;
  margin: 50px auto;
  background-color: lightgrey;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 10px 5px 5px black;
  select {
   max-width: 40%;
    height: 30px;
    margin: 10px auto;
    border-radius: 5px;
  }
`;

export const EstiloInternoCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    img{
        width: 60%;
    }
    p{
        font-weight: bold;
        font-size: 1.3rem;
    }
`;
