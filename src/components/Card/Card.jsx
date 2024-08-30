import "./Card.css";

export const Card = ({ title, price, address, date, img }) => {
  return (
    <a href="/single.html" className="content-main__list-item card">
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
    </a>
  );
};
