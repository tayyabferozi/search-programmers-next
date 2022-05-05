import React, { useContext } from "react";
import SearchContainer from "../../../components/SearchContainer";

import Section from "../../../components/Section";

import { GlobalContext } from "../../../context/GlobalContext";

const content = {
  English: {
    text1: "We Make Working With",
    text2: "Programmers",
    text3: "Easier",
    text4:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  Spanish: {
    text1: "Nosotras hacemos trabajar con",
    text2: "Programadores",
    text3: "Más fácil",
    text4:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
};

const Hero = () => {
  const {
    state: { appLanguage },
  } = useContext(GlobalContext);

  return (
    <Section id="landing-hero">
      <div className="section-title text-center">
        <h1>
          {content[appLanguage].text1}{" "}
          <span className="text-primary-1">{content[appLanguage].text2}</span>{" "}
          {content[appLanguage].text3}
        </h1>
        <p className="mt-2">{content[appLanguage].text4}</p>
      </div>

      <img
        className="arrow"
        src="/assets/vectors/landing-hero-arrow..svg"
        alt="arrow"
      />

      <SearchContainer />
    </Section>
  );
};

export default Hero;
