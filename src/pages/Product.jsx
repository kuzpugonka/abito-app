import { Link, useOutletContext, useParams } from "react-router-dom";
import { Footer } from "../components/Footer/Footer";
import { Side } from "../components/Side/Side";
import { sideArray } from "../side";

export const Product = () => {
  const { products } = useOutletContext();

  let { id } = useParams();
  const findProduct = products.find((p) => p.id === +id)

  return (
          <section className="content">
          <div className="container">
            <div className="content-box">
              <div className="content-product">
              {
                findProduct ? 
                <>
                <div className="content-product__left">
                  <h2 className="content-product__title">
                    {findProduct.title}
                  </h2>
                  <img
                    className="content-product__img"
                    src= {findProduct.img}
                    alt={findProduct.title}
                  />
                  <p className="content-product__text">
                  {findProduct.description}
                  </p>
                </div>

                <div className="content-product__right">
                  <h2 className="content-product__price">{findProduct.price}&nbsp;₽</h2>
                  <button className="btn content-product__price-btn">
                    Показать телефон
                  </button>
                </div> 
                </>
              : 
              <>
              <div className="content-product__undefind">
              <h2>Такого товара не существует</h2>
              <Link className="" to={"/"}>
              <button className="btn">
                Вернуться на главную страницу
                </button>
                </Link>
              </div>
              </>
              }
              </div>

              <div className="content-side">
                <h2 className="content-side__title">Сервисы и услуги</h2>

                <div className="content-side__box">
                  {sideArray.map((item) => (
                    <Side
                      key={item.id}
                      img={item.img}
                      title={item.title}
                      text={item.text}
                    />
                  ))}
                </div>

                <Footer />
              </div>
            </div>
          </div>
        </section>
  );
};
