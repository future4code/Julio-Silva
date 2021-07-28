import React from "react";
import styled from "styled-components";


const LayoutForm1  = styled.div`
  
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 800px;
  height: 300px;
  text-align: center;
  padding: 10px;
  
`;



export default class Agradecimento extends React.Component {
  render() {
    return (
      <LayoutForm1>
        <h1>O FORMULÁRIO ACABOU</h1>
        <h3>Obrigado por preencher o formulário, Entraremos em contato!</h3>
      </LayoutForm1>
    );
  }
}
