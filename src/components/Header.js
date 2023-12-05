import logo from "../images/vector.svg";

export default function Header() {
  return (
    <header className="page__header header">
      <img className="header__logo" src={logo} alt="Логтип Mesto" />
    </header>
  );
}
