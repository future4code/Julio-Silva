import React from "react";
import styled from "styled-components";
import "./styles.css";

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`;

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({ completa }) => (completa ? "line-through" : "none")};
`;

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`;

class App extends React.Component {
  state = {
    tarefas: [],
    inputValue: "",
    filtro: "",
  };

  componentDidUpdate(prevState) {
    localStorage.setItem("tarefas", JSON.stringify(this.state.tarefas));
  }

  componentDidMount() {
    const listaDeTarefas2 = localStorage.getItem("tarefas");
    const chamaListaTarefa = JSON.parse(listaDeTarefas2);
    if (chamaListaTarefa) {
      this.setState({ tarefas: chamaListaTarefa });
    }
  }

  // capturando o valor do input
  onChangeInput = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  //adicionando tarefas na lista pegando valor do input
  criaTarefa = () => {
    const novasTarefas = [...this.state.tarefas];
    novasTarefas.push({
      id: Date.now(),
      texto: this.state.inputValue,
      completa: this.state.filtro,
    });
    this.setState({ tarefas: novasTarefas });
  };

  selectTarefa = (id) => {
    const listaTarefas = [...this.state.tarefas]
    const tarefaID = listaTarefas.map((array) => {
      if (array.id === id){
       array.completa = !array.completa}
        return array
      })
      this.setState({tarefas: tarefaID})
    }

  //capturando o valor do input options
  onChangeFilter = (event) => {
    this.setState({ filtro: event.target.value });
   
  };

  render() {
    // selecionando as tarefas concluidas e pendentes
    const listaFiltrada = this.state.tarefas.filter((tarefa) => {
      switch (this.state.filtro) {
        case "pendentes":
          return !tarefa.completa;
        case "completas":
          return tarefa.completa;
        default:
          return true;
      }
    });

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput} />
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br />

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map((tarefa) => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            );
          })}
        </TarefaList>
      </div>
    );
  }
}

export default App;
