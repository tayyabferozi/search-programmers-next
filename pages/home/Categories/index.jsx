import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import Section from "../../../components/Section";

import { GlobalContext } from "../../../context/GlobalContext";

const content = {
  English: {
    text1: "Important",
    text2: "Categories",
    text3:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  Spanish: {
    text1: "Importante",
    text2: "Categorías",
    text3:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
};

const cardsData = [
  {
    bg: "/assets/imgs/category-1.png",
    icon: "/assets/imgs/category-icon-1.png",
    title: "JavaScript",
    desc: "Lorem Ipsum is simply dummy text of the printing.",
  },
  {
    bg: "/assets/imgs/category-2.png",
    icon: "/assets/imgs/category-icon-2.png",
    title: "Shopify",
    desc: "Lorem Ipsum is simply dummy text of the printing.",
  },
  {
    bg: "/assets/imgs/category-3.png",
    icon: "/assets/imgs/category-icon-3.png",
    title: "JavaScript",
    desc: "Lorem Ipsum is simply dummy text of the printing.",
  },
  {
    bg: "/assets/imgs/category-4.png",
    icon: "/assets/imgs/category-icon-4.png",
    title: "PHP",
    desc: "Lorem Ipsum is simply dummy text of the printing.",
  },
];

const Categories = () => {
  const {
    state: { appLanguage },
  } = useContext(GlobalContext);
  return (
    <Section id="landing-categories">
      <div className="section-title">
        <h1>
          {content[appLanguage].text1}{" "}
          <span className="text-primary-1">{content[appLanguage].text2}</span>
        </h1>
        <p>{content[appLanguage].text3}</p>
      </div>

      <div className="cards mt-40">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            671: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 15,
            },
            1250: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
        >
          {cardsData.map((el, idx) => {
            const { icon, bg, title, desc } = el;

            return (
              <SwiperSlide key={"category-card" + idx}>
                <div className="card">
                  <img className="bg" src={bg} alt={title} />

                  <div className="text">
                    <img className="icon" src={icon} alt={title} />

                    <h6 className="mt-1">{title}</h6>

                    <p className="text-light-1 mt-10">{desc}</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}{" "}
        </Swiper>
      </div>
    </Section>
  );
};

export default Categories;
