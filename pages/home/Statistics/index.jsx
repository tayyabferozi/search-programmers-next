import React, { useContext } from "react";

import GridContainer from "../../../components/GridContainer";
import Section from "../../../components/Section";
import Button from "../../../components/Button";

import { GlobalContext } from "../../../context/GlobalContext";

const content = {
  English: {
    text1: "Statistics",
    text2:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    text3: "Work As A Programmer",
    text4: "Work With Programmer",
  },
  Spanish: {
    text1: "Estadísticas",
    text2:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    text3: "Trabajar como programador",
    text4: "Trabajar con programador",
  },
};

const cardsData = [
  {
    icon: "/assets/vectors/stats-1.svg",
    number: "2,575,457",
    title: "Programmers",
  },
  {
    icon: "/assets/vectors/stats-2.svg",
    number: "55,896",
    title: "Clients Registered",
  },
  {
    icon: "/assets/vectors/stats-3.svg",
    number: "33,768",
    title: "Users Online",
  },
  {
    icon: "/assets/vectors/stats-4.svg",
    number: "30,337",
    title: "Monthly Projects",
  },
];

const Statistics = () => {
  const {
    state: { appLanguage },
  } = useContext(GlobalContext);
  return (
    <Section id="landing-stats">
      <div className="section-title">
        <h1>{content[appLanguage].text1}</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>

      <GridContainer
        rowClassName="main-row justify-content-center"
        rootClassName="mt-50"
      >
        {cardsData.map((el, idx) => {
          const { icon, number, title } = el;

          return (
            <div
              className="col-xl-3 col-lg-4 col-sm-6"
              key={"stats-card" + idx}
            >
              <div className="card">
                <img src={icon} alt={title} />

                <div className="text">
                  <h4 className="text-primary-1">{number}</h4>
                  <div className="text-light-1 mt-2">{title}</div>
                </div>
              </div>
            </div>
          );
        })}
      </GridContainer>

      <div className="mt-50 btns">
        <Button transparent>{content[appLanguage].text3}</Button>
        <Button primary>{content[appLanguage].text4}</Button>
      </div>
    </Section>
  );
};

export default Statistics;
