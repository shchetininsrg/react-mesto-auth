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
        <p>Уже зарегистрировались? Войти</p>
      </form>
    </div>
  );
}
