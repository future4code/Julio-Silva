import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { BaseUrlLogin } from "./../../Constants/BaseURL";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onSubmitLogin = () => {
    const body = {
      email: email,
      password: password,
    };

    axios
      .post(BaseUrlLogin, body)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        history.push("/admin");
        setEmail("");
        setPassword("");
      })
      .catch(() => {
        setEmail("");
        setPassword("");
        alert("Usuário ou senha incorreto");
      });
  };

  return (
    <div>
      <input
        placeholder="email"
        type="email"
        value={email}
        onChange={onChangeEmail}
      />
      <input
        placeholder="password"
        type="password"
        value={password}
        onChange={onChangePassword}
      />
      <button onClick={onSubmitLogin}>Enviar</button>
    </div>
  );
};
