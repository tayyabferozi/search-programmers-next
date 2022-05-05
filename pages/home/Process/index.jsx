import React, { useState, useContext } from "react";

import GridContainer from "../../../components/GridContainer";
import Section from "../../../components/Section";
import Button from "../../../components/Button";

import { GlobalContext } from "../../../context/GlobalContext";

const content = {
  English: {
    text1: "Our",
    text2: "Process",
    text3: "Work with developers from anywhere in the world in 3 easy steps",
    text4: "Search",
    text5: "Chat",
    text6: "Remember",
    text7: "Need Help?",
    text8:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    text9: "Answer Questionnaire",
  },
  Spanish: {
    text1: "Nuestra",
    text2: "Proceso",
    text3:
      "Trabaja con desarrolladores de cualquier parte del mundo en 3 sencillos pasos",
    text4: "Búsqueda",
    text5: "Chat",
    text6: "Recordar",
    text7: "¿Necesitas ayuda?",
    text8:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    text9: "Cuestionario de respuesta",
  },
};

const Process = () => {
  const {
    state: { appLanguage },
  } = useContext(GlobalContext);
  const [cardsData] = useState([
    {
      img: "/assets/vectors/process-1.svg",
      title: content[appLanguage].text4,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      img: "/assets/vectors/process-2.svg",
      title: content[appLanguage].text5,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      img: "/assets/vectors/process-3.svg",
      title: content[appLanguage].text6,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
  ]);

  return (
    <Section id="landing-process">
      <img
        className="bg-left"
        src="/assets/vectors/bg-process-left.svg"
        alt="bg"
      />
      <img
        className="bg-right"
        src="/assets/vectors/bg-process-right.svg"
        alt="bg"
      />
      <img
        className="bg-left-dark"
        src="/assets/vectors/bg-process-left-dark.svg"
        alt="bg"
      />
      <img
        className="bg-right-dark"
        src="/assets/vectors/bg-process-right-dark.svg"
        alt="bg"
      />

      <div className="text-wrap">
        <div className="section-title">
          <h1>
            {content[appLanguage].text1}{" "}
            <span className="text-primary-1">
              {" "}
              {content[appLanguage].text2}{" "}
            </span>
          </h1>
          <p> {content[appLanguage].text3} </p>
        </div>

        <div className="cards">
          <GridContainer rowClassName="justify-content-center main-row">
            <img
              className="arrow-1"
              src="/assets/vectors/process-arrow-1.svg"
              alt="arrow"
            />
            <img
              className="arrow-2"
              src="/assets/vectors/process-arrow-2.svg"
              alt="arrow"
            />
            {cardsData.map((el, idx) => {
              const { img, title, desc } = el;

              return (
                <div key={"process" + idx} className="col-xl-4 col-lg-6">
                  <div className="card">
                    <img src={img} alt={title} />

                    <h5>{title}</h5>
                    <p className="text-light-1 mt-15">{desc}</p>
                  </div>
                </div>
              );
            })}
          </GridContainer>
        </div>

        <div className="help">
          <div className="main">
            <GridContainer rowClassName="main-row align-items-center">
              <div className="col-lg-3">
                <img src="/assets/imgs/help-left.png" alt="help" />{" "}
              </div>
              <div className="col-lg-9">
                <div className="py-lg-5">
                  <h1>{content[appLanguage].text7}</h1>

                  <p className="mt-2">{content[appLanguage].text8}</p>

                  <Button primaryInverted className="mt-30">
                    {content[appLanguage].text9}
                  </Button>
                </div>
              </div>
            </GridContainer>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Process;
