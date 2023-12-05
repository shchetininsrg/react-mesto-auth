import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="auth">
      <h2 className="auth__title">Регистрация</h2>
      <form>
        <input
          className="auth__input"
          type="email"
          name="email"
          placeholder="Email"
        />
        <input
          className="auth__input"
          type="password"
          name="password"
          placeholder="Пароль"
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
