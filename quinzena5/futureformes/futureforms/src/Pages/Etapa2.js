import React from "react";

export default class FormEnsinoSuperior extends React.Component {
  render() {
    return (
      <div>
        <h1>Etapa 2 - Informações Educacionais</h1>
        <input value={this.props.curso} type="text" placeholder="Qual curso?" />
        <input
          value={this.props.nomeCurso}
          type="text"
          placeholder="Qual unidade de ensino?"
        />
      </div>
    );
  }
}
