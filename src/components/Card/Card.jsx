import { Link } from "react-router-dom";
import "./Card.css";

export const Card = ({ id, title, price, address, date, img }) => {
  return (
    <Link to={`/product/${id}`} className="content-main__list-item card">
      <div className="card__img">
        <img
          className="card-img"
          src={img}
          alt="Изображение товара {title}"
        />
      </div>

      <div className="card__info">
        <h3 className="card__title">{title}</h3>
        <p className="card__price">{price}&nbsp;₽</p>
        <p className="card__address">{address}</p>
        <p className="card__date">{date}</p>
      </div>
    </Link>
  );
};
