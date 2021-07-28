import React from "react";
import styled from "styled-components";
import FormDadosGerais from "./Pages/Etapa1";
import FormEnsinoSuperior from "./Pages/Etapa2";
import FormInfoGeraisEnsino from "./Pages/Etapa3";
import Agradecimento from "./Pages/EtapaFinal";

const LayoutMainContainer = styled.div`
  font-size: 2em;
  margin: 15px; 
 
  text-align: center;
`;




export default class App extends React.Component {
  state = {
    etapa: 1,
  };

  visualizar = () => {
    switch (this.state.etapa) {
      case 1:
        return <FormDadosGerais />;
      case 2:
        return <FormEnsinoSuperior />;
      case 3:
        return <FormInfoGeraisEnsino />;
      case 4:
        return <Agradecimento />;
      default:
        return <Agradecimento />;
    }
  };

  proximo = () => {
    this.setState({ etapa: this.state.etapa + 1 });
  };

  render() {
    return (
      <div className="App">
        <LayoutMainContainer>Future Forms</LayoutMainContainer>
        <div>{this.visualizar()}</div>
        {this.state.etapa !== 4 && (
          <LayoutMainContainer onClick={this.proximo}>Próxima página</LayoutMainContainer>
        )}
      </div>
    );
  }
}
