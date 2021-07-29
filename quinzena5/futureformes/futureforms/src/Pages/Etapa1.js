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

const inputFomrs = styled.input`
  text-align: center;

`

export default class FomrDadosGerais extends React.Component {
  render() {
    return (
      <LayoutForm1>
        <div>Etapa 1 - Dados Gerais</div>
        <input
          value={this.props.nome}
          type="text"
          placeholder="Nome completo"
          required
        />
        <input 
          value={this.props.idade}
          type="number"
          placeholder="Digite sua idade"
        />
        <input
          value={this.props.email}
          type="email"
          placeholder="Digite seu e-mail"
        />
        <label>Qual seu grau de escolaridade</label>
        <select>
          <option value="0"></option>
          <option value="1">Ensino Médio Incompleto</option>
          <option value="2">Ensino Médio Completo</option>
          <option value="3">Superior Incompleto</option>
          <option value="4">Superior Completo</option>
        </select>
      </LayoutForm1>
    );
  }
}


