export const Side = ({ img, title, text }) => {
  return (
    <div className="content-side__list">
      <a className="content-side__list-item" href="#!">
        <img className="content-side__list-item--img" src={img} alt={title} />
        <h4 className="content-side__list-item--title">{title}</h4>
        <p className="content-side__list-item--text">{text}</p>
      </a>
    </div>
  );
};
