import axios from "axios";

import { useHistory } from "react-router-dom";
import { headers } from "../../Constants/Header";
import useForm from "../../CustomHook/useForm";

export const Login = () => {
  const history = useHistory();

  const { form, onChange, cleanFields } = useForm({
    email: "",
    password: "",
  });

  const LoginAdmin = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/login",
        form,
        headers
      )
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        history.push("/admin");
        console.log("deu certo ");
        cleanFields();
      })
      .catch(() => {
        alert("Ops, algo deu errado!");
      });
  };

  return (
    <div>
      <form onSubmit={LoginAdmin}>
        <input
          placeholder="email"
          type="email"
          value={form.email}
          name={"email"}
          onChange={onChange}
        />
        <input
          placeholder="password"
          type="password"
          value={form.password}
          name={"password"}
          onChange={onChange}
        />
        <button>Enviar</button>
      </form>
    </div>
  );
};
