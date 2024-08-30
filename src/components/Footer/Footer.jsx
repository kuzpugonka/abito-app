import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="content-side__footer">
      <p className="content-side__footer--copiright">
        © ООО «Абито», 2011–2021
      </p>
      <Link className="content-side__footer--politics" to="/privacy">
        Политика конфиденциальности
      </Link>
      <Link className="content-side__footer--sequrity" to="/privacy">
        Обработка данных
      </Link>
    </footer>
  );
};
