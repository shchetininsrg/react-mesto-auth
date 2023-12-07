import { Link, useNavigate } from "react-router-dom";
import React from "react";
import * as auth from "../utils/auth.js";

export default function Register() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const navigate = useNavigate();

  function handleChangeEmail(evt) {
    setEmail(evt.target.value);
  }
  function handleChangePassword(evt) {
    setPassword(evt.target.value);
  }
  function handleRegister(evt) {
    evt.preventDefault();
    auth.register(email, password).then(() => {
      navigate("/signin");
    });
  }
  return (
    <div className="auth">
      <h2 className="auth__title">Регистрация</h2>
      <form onSubmit={handleRegister}>
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
          Зарегистрироваться
        </button>
        <p className="auth__text">
          Уже зарегистрировались?{" "}
          <Link className="auth__link" to="/sign-in">
            Войти
          </Link>
        </p>
      </form>
    </div>
  );
}
