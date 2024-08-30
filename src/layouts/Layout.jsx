import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { useEffect, useState } from "react";
import { cardArray } from "../constants";

export const Layout = () => {
  const [searchText, setSearchText] = useState("");
  const [products, setProducts] = useState([]);

  const hendelSearch = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearchArray = () => {
    setProducts(
      cardArray.filter(
        (p) => p.title.includes(searchText) || p.price.includes(searchText)
      )
    );
  };

  useEffect(() => {
    setProducts(cardArray);
  }, []);

  return (
    <>
      <Header />

      <main>
        <section className="search">
          <div className="container">
            <h1 hidden>Размещение объявлений и покупка товаров</h1>
            <div className="search-box">
              <input
                type="text"
                placeholder="Поиск по объявлениям"
                value={searchText}
                onChange={hendelSearch}
              />
              <button className="btn search-btn" onClick={handleSearchArray}>
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

        <Outlet context={{ products }} />
      </main>
    </>
  );
};
