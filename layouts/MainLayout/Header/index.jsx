import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import clsx from "clsx";

import Select from "../../../components/Select/Select";
import Option from "../../../components/Select/Option";
import Section from "../../../components/Section";
import LightModeToggler from "../../../components/LightModeToggler";
import NavLink from "../../../components/NavLink";

import { GlobalContext } from "../../../context/GlobalContext";
import { changeLanguage } from "../../../context/actions";

const content = {
  English: {
    text1: "Home",
    text2: "Beginning",
    text3: "Explore",
    text4: "Log in",
    text5: "Web Developer",
    text6: "App Developer",
  },
  Spanish: {
    text1: "Home",
    text2: "Comienzo",
    text3: "Explorar",
    text4: "Iniciar sesión",
    text5: "Search Web Developer",
    text6: "Desarrolladora web",
    text7: "Desarrollador de aplicaciones",
  },
};

const Header = () => {
  const {
    state: { appLanguage },
    dispatch,
  } = useContext(GlobalContext);
  const [scrolled, setScrolled] = useState(false);
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenuActive = () => {
    setIsMenuActive((prevState) => !prevState);
  };

  const langChangeHandler = (value) => {
    dispatch(changeLanguage(value));
  };

  useEffect(() => {
    const handler = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", null);
    };
  });
  return (
    <Section id="header" className={clsx(scrolled && "scrolled")}>
      <Link href="/home">
        <img className="logo-img" src="/assets/vectors/logo.svg" alt="logo" />
      </Link>
      <div className={clsx(isMenuActive && "active", "menu-sm")}>
        <div className="close" onClick={toggleMenuActive}>
          &times;
        </div>
        <Link href="/home">
          <img className="logo-img" src="/assets/vectors/logo.svg" alt="logo" />
        </Link>
        <NavLink href="/home">{content[appLanguage].text1}</NavLink>
        <NavLink href="/beginning">{content[appLanguage].text2}</NavLink>
        <NavLink href="/search-results">{content[appLanguage].text3}</NavLink>
        <NavLink href="/login">{content[appLanguage].text4}</NavLink>
        <LightModeToggler />

        <Select placeholder="English" onChange={langChangeHandler}>
          <Option value="English">English</Option>
          <Option value="Spanish">Spanish</Option>
        </Select>

        <Link className="btn btn-primary" href="/register">
          <div className="btn btn-primary">
            <div className="btn-text">Check In</div>
          </div>
        </Link>
      </div>
      <div className="hamburger" onClick={toggleMenuActive}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="nav">
        <NavLink href="/home">{content[appLanguage].text1}</NavLink>
        <NavLink href="/beginning">{content[appLanguage].text2}</NavLink>
        <NavLink href="/search-results">{content[appLanguage].text3}</NavLink>
        <NavLink href="/login">{content[appLanguage].text4}</NavLink>
      </div>
      <div className="options">
        <LightModeToggler />

        <Select placeholder="English" onChange={langChangeHandler}>
          <Option value="English">English</Option>
          <Option value="Spanish">Spanish</Option>
        </Select>

        <Link className="btn btn-primary" href="/register">
          <div className="btn btn-primary">
            <div className="btn-text">Check In</div>
          </div>
        </Link>
      </div>
    </Section>
  );
};

export default Header;
