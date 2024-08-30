import { Card } from "../components/Card/Card";
import { Header } from "../components/Header/Header";
import { Side } from "../components/Side/Side";
import { cardArray } from "../constants";
import { sideArray } from "../side";

export const Home = () => {
  return (
    <>
      <Header />

      <main>
        <section className="search">
          <div className="container">
            <h1 className="hidden">Размещение объявлений и покупка товаров</h1>
            <div className="search-box">
              <input type="text" placeholder="Поиск по объявлениям" />
              <button className="btn search-btn">
                <img
                  className="search-btn__icon"
                  src="/img/search.svg"
                  alt="search"
                  aria-label="Кнопка поиска с изображением лупы"
                />
                <span className="search-btn__text">Найти</span>
              </button>
            </div>
          </div>
        </section>

        <section className="content">
          <div className="container">
            <div className="content-box">
              <div className="content-main">
                <h2 className="content-main__title">Рекомендации для вас</h2>

                <div className="content-main__list">
                  {cardArray.map((card) => (
                    <Card
                      key={card.id}
                      title={card.title}
                      price={card.price}
                      address={card.address}
                      date={card.date}
                      img={card.img}
                    />
                  ))}
                </div>
              </div>

              <div className="content-side">
                <h2 className="content-side__title">Сервисы и услуги</h2>

                <div className="content-side__box">
                {
                  sideArray.map((item) => (
                  <Side 
                    key={item.id}
                    img={item.img}
                    title={item.title}
                    text={item.text}
                  />
                ))
                }
                </div>

                <footer className="content-side__footer">
                  <p className="content-side__footer--copiright">
                    © ООО «Абито», 2011–2021
                  </p>
                  <a
                    className="content-side__footer--politics"
                    href="/privacy.html"
                  >
                    Политика конфиденциальности
                  </a>
                  <a
                    className="content-side__footer--sequrity"
                    href="/privacy.html"
                  >
                    Обработка данных
                  </a>
                </footer>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
