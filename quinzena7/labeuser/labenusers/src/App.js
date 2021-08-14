import React from "react";

import axios from "axios";

class App extends React.Component {
  state = {
    listaUsuarios: [],
    name: "",
    email: "",
  };

  onChangeNome = (e) => {
    this.setState({ name: e.target.value });
  };

  onChangeEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  criarUsuarios = async () => {
    await axios.post(
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/",
      {
        name: this.state.name,
        email: this.state.email,
      },
      {
        headers: {
          Autorization: "julio-silva-johnson",
        },
      }
    );
    this.criarUsuarios().then((response) => {
      alert("novo usuário cridado com sucesso");
      this.setState({ name: "" });
      this.setState({ email: "" });
      this.setState({ listaUsuarios: response.data });
    });
  };




  mostrarListasuario = () =>{

  }

  render() {
    return (
      <>
        <div className="app-header">
          <h2>Cadastro novo usuário</h2>
          <form>
            <label>
              <input
                type="text"
                name="name"
                placeholder="Digite o nome do usuário"
              />
              <input
                type="text"
                name="email"
                placeholder="Digite o E-mail do usuário"
              />
            </label>
            <button onClick={this.criarUsuarios}>Criar usúario</button>
          </form>
        </div>
      </>
    );
  }
}

export default App;
