export default function Login() {
  return (
    <div className="auth">
      <h2 className="auth__title">Вход</h2>
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
          Войти
        </button>
      </form>
    </div>
  );
}
