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

export default class FormInfoGeraisEnsino extends React.Component {
  render() {
    return (
      <LayoutForm1>
        <h1>Etapa 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
        <input
          value={this.props.graduacaoIncompleta}
          type="text"
          placeholder="Porque não terminou a graduação?"
        />
        <label>Você fez algum curso complementar?</label>
        <select>
          <option value="0">Não fiz curso complementar</option>
          <option value="1">Curso técnico</option>
        </select>
      </LayoutForm1>
    );
  }
}
