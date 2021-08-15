import React from "react";
import axios from "axios";
import styled from "styled-components";

const CadastroNovolayout = styled.div`  
  display: flex;
  flex-direction: column;
  padding: 10px;
  align-items: center;
  margin: 20px auto;
`;

const ConfigInput = styled.input`
  width: 50%;  
  outline: none;
`;
const ConfigButton = styled.button`
  width: 40%;
  border-radius: 5px;  
  cursor: pointer;
`;

export default class TelaAdicionar extends React.Component {
  state = {
    nome: "",
    email: "",
  };

  onChangeNome = (e) => {
    this.setState({ nome: e.target.value });
  };

  onChangeEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  onClickEnviar = () => {
    const body = {
      name: this.state.nome,
      email: this.state.email,
    };
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        {
          headers: {
            Authorization: "julio-silva-johnson",
          },
        }
      )
      .then(() => {
        this.setState({
          nome: "",
          email: "",
        });
        alert("Usuário adicionado à lista!");
      })
      .catch(() => {
        if (this.state.nome === "" || this.state.email === "") {
          alert("Preencha todos os campos!");
        } else {
          alert("Usuário já existente!");
        }
      });
  };

  render() {
    return (
      <CadastroNovolayout>
        <h1>Adicionar Novo Usuário</h1>
        <label name={"inputNome"}></label>
        <ConfigInput
          onChange={this.onChangeNome}
          value={this.state.nome}
          placeholder="Digite o nome do usuário"
        />
        <br />
        <label></label>
        <ConfigInput
          onChange={this.onChangeEmail}
          value={this.state.email}
          placeholder="Digite o E-mail do usuário"
        />
        <br />
        <ConfigButton onClick={this.onClickEnviar}>Adicionar</ConfigButton>
        <hr />
        <ConfigButton onClick={this.props.acessaListadeUsuarios}>
          Ver todos os usuários
        </ConfigButton>
      </CadastroNovolayout>
    );
  }
}
