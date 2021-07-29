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


export default class FormEnsinoSuperior extends React.Component {
  render() {
    return (
      <LayoutForm1>
        <h1>Etapa 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
        <input value={this.props.curso} type="text" placeholder="Qual curso?" />
        <input
          value={this.props.nomeCurso}
          type="text"
          placeholder="Qual unidade de ensino?"
        />
      </LayoutForm1>
    );
  }
}
