import React, { useContext } from "react";
import Link from "next/link";

import Accordion from "../../../components/Accordion/";
import GridContainer from "../../../components/GridContainer";
import Section from "../../../components/Section";
import { GlobalContext } from "../../../context/GlobalContext";

const cardsData = [
  {
    img: "/assets/imgs/result-img-1.png",
    userImg: "/assets/imgs/result-user-img-1.png",
    name: "Edoardoizzo",
    desc: "I will create one product shopify store, dropshipping website",
    stars: "5.0",
    reviews: "325",
    startingAt: 187,
  },
  {
    img: "/assets/imgs/result-img-2.png",
    userImg: "/assets/imgs/result-user-img-2.png",
    name: "Edoardoizzo",
    desc: "I will create one product shopify store, dropshipping website",
    stars: "5.0",
    reviews: "325",
    startingAt: 187,
  },
  {
    img: "/assets/imgs/result-img-3.png",
    userImg: "/assets/imgs/result-user-img-3.png",
    name: "Edoardoizzo",
    desc: "I will create one product shopify store, dropshipping website",
    stars: "5.0",
    reviews: "325",
    startingAt: 187,
  },
  {
    img: "/assets/imgs/result-img-4.png",
    userImg: "/assets/imgs/result-user-img-4.png",
    name: "Edoardoizzo",
    desc: "I will create one product shopify store, dropshipping website",
    stars: "5.0",
    reviews: "325",
    startingAt: 187,
  },
  {
    img: "/assets/imgs/result-img-5.png",
    userImg: "/assets/imgs/result-user-img-5.png",
    name: "Edoardoizzo",
    desc: "I will create one product shopify store, dropshipping website",
    stars: "5.0",
    reviews: "325",
    startingAt: 187,
  },
  {
    img: "/assets/imgs/result-img-6.png",
    userImg: "/assets/imgs/result-user-img-6.png",
    name: "Edoardoizzo",
    desc: "I will create one product shopify store, dropshipping website",
    stars: "5.0",
    reviews: "325",
    startingAt: 187,
  },
  {
    img: "/assets/imgs/result-img-7.png",
    userImg: "/assets/imgs/result-user-img-7.png",
    name: "Edoardoizzo",
    desc: "I will create one product shopify store, dropshipping website",
    stars: "5.0",
    reviews: "325",
    startingAt: 187,
  },
  {
    img: "/assets/imgs/result-img-8.png",
    userImg: "/assets/imgs/result-user-img-8.png",
    name: "Edoardoizzo",
    desc: "I will create one product shopify store, dropshipping website",
    stars: "5.0",
    reviews: "325",
    startingAt: 187,
  },
];

const content = {
  English: {
    text1: "Results for",
    text2: "Services available",
    text3: "Category",
    text4: "Service Options",
    text5: "Seller Details",
    text6: "Budget",
    text7: "Delivery Time",
    text8: "Pro services",
    text9: "Local sellers",
    text10: "Online sellers",
  },
  Spanish: {
    text1: "Resultados para",
    text2: "servicios disponibles",
    text3: "Categoría",
    text4: "Opciones de servicio",
    text5: "Detalles del vendedor",
    text6: "Presupuesto",
    text7: "El tiempo de entrega",
    text8: "Servicios profesionales",
    text9: "Vendedores locales",
    text10: "Vendedores en línea",
  },
};

const Results = () => {
  const {
    state: { appLanguage },
  } = useContext(GlobalContext);

  return (
    <Section id="search-results">
      <img
        className="bg-results-1"
        src="/assets/vectors/bg-results-1.svg"
        alt="bg-results"
      />
      <img
        className="bg-results-2"
        src="/assets/vectors/bg-results-2.svg"
        alt="bg-results"
      />
      <img
        className="bg-results-3"
        src="/assets/vectors/bg-results-3.svg"
        alt="bg-results"
      />
      <div className="section-title text-start">
        <h1>
          {content[appLanguage].text1}{" "}
          <span className="text-primary-1">"Shopify"</span>
        </h1>
        <h4>26,221 {content[appLanguage].text2}</h4>
      </div>

      <div className="results-main mt-50 pt-20">
        <GridContainer>
          <div className="col-xl-4 col-lg-5 col-md-6">
            <div className="filter-items">
              <Accordion title={content[appLanguage].text3}>Lorem</Accordion>
              <Accordion title={content[appLanguage].text4}>Lorem</Accordion>
              <Accordion title={content[appLanguage].text5}>Lorem</Accordion>
              <Accordion title={content[appLanguage].text6}>Lorem</Accordion>
              <Accordion title={content[appLanguage].text7}>Lorem</Accordion>

              <div className="item">
                <div className="text">{content[appLanguage].text8}</div>
                <label className="switch-2">
                  <input type="checkbox" />
                  <span className="slider round"></span>
                </label>
              </div>
              <div className="item">
                <div className="text">{content[appLanguage].text9}</div>
                <label className="switch-2">
                  <input type="checkbox" />
                  <span className="slider round"></span>
                </label>
              </div>
              <div className="item">
                <div className="text">{content[appLanguage].text10}</div>
                <label className="switch-2">
                  <input type="checkbox" />
                  <span className="slider round"></span>
                </label>
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-lg-7 col-md-6">
            <div className="row cards-row">
              {cardsData.map((el, idx) => {
                const { img, userImg, name, desc, stars, reviews, startingAt } =
                  el;
                return (
                  <div key={"result-card" + idx} className="col-xl-6 c-pointer">
                    <Link href="/post-view">
                      <div className="result-card">
                        <div className="card-img">
                          <img src={img} alt={desc} />
                        </div>
                        <div className="card-body">
                          <div className="user-info d-flex align-items-center justify-content-start gap-2">
                            <img src={userImg} alt={name} />
                            <div className="text">
                              <strong>{name}</strong>
                              <div className="fs-16 fw-400 text-primary-1">
                                Top Rated Seller
                              </div>
                            </div>
                          </div>

                          <div className="desc my-20">{desc}</div>

                          <div className="stars d-flex align-items-center">
                            <img
                              src="/assets/vectors/star-fill.svg"
                              alt="star-fill"
                            />
                            <div className="star-text ms-2">
                              <div className="fs-16 text-light-1">
                                <span className="text-orange">{stars}</span> (
                                {reviews})
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="card-foot">
                          <img
                            className="c-pointer"
                            src="/assets/vectors/heart-fill.svg"
                            alt="heart"
                          />
                          <div className="right-text">
                            <div>STARTING AT</div>
                            <div className="text-primary-1 fw-600 fs-16 mt-1 text-end">
                              ${startingAt}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </GridContainer>
      </div>
    </Section>
  );
};

export default Results;
