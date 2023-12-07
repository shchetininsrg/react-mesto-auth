import { useNavigate } from "react-router-dom";
import React from "react";
import * as auth from "../utils/auth.js";

export default function Login({ onLogin }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const navigate = useNavigate();

  function handleChangeEmail(evt) {
    setEmail(evt.target.value);
  }
  function handleChangePassword(evt) {
    setPassword(evt.target.value);
  }

  function handleLogin(evt) {
    evt.preventDefault();
    auth
      .login(email, password)
      .then(() => {
        onLogin();
        navigate("/", { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div className="auth">
      <h2 className="auth__title">Вход</h2>
      <form onSubmit={handleLogin}>
        <input
          className="auth__input"
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleChangeEmail}
        />
        <input
          className="auth__input"
          type="password"
          name="password"
          placeholder="Пароль"
          value={password}
          onChange={handleChangePassword}
        />
        <button className="auth__button" type="submit">
          Войти
        </button>
      </form>
    </div>
  );
}
