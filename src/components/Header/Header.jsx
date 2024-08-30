import { Link } from 'react-router-dom';
import './Header.css'

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-box">
          <Link className="header__logo" to={"/"}>
            <img
              src="/img/logo.svg"
              alt="logo"
              aria-label="Логотип компании в виде коробки"
            />
            <span>Abito</span>
          </Link>
          <div className="header__controls">
            <button className="btn btn-outline">Вход и регистрация</button>
            <button className="btn btn-primery">Подать объявление</button>
          </div>
          <div className="header-burger">
            <img
              src="/img/burger.svg"
              alt="burger"
              aria-label="Кнопка перехода в мобильное меню"
            />
          </div>
        </div>
      </div>
    </header>
  );
};
