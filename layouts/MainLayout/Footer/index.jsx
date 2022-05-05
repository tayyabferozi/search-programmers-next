import React, { useContext } from "react";
import Link from "next/link";

import Section from "../../../components/Section";
import GridContainer from "../../../components/GridContainer";

import { GlobalContext } from "../../../context/GlobalContext";

const content = {
  English: {
    text1: "Main Link",
    text2: "Home",
    text3: "Services",
    text4: "Blog",
    text5: "Contact",
    text6: "Quick Link",
    text7: "Terms & Conditions",
    text8: "Privacy Policy",
    text9: "Contact",
    text10: "Telephone",
    text11: "Email Address",
  },
  Spanish: {
    text1: "Enlace principal",
    text2: "Home",
    text3: "Servicios",
    text4: "Blog",
    text5: "Contacto",
    text6: "Enlace rápido",
    text7: "Términos y condiciones",
    text8: "Política de privacidad",
    text9: "Contacto",
    text10: "Teléfono",
    text11: "Email Address",
  },
};

const Footer = () => {
  const {
    state: { appLanguage },
  } = useContext(GlobalContext);
  return (
    <Section id="footer">
      <GridContainer rowClassName="main-row">
        <div className="col-lg-4 left">
          <Link href="/home">
            <img
              className="logo-img"
              src="/assets/vectors/logo.svg"
              alt="logo"
            />
          </Link>

          <p className="fs-16 mt-4 text-light-1">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard
          </p>

          <div className="social">
            <a href="www.facebook.com" className="btn">
              <img src="/assets/vectors/social-fb.svg" alt="FB" />
            </a>
            <a href="www.facebook.com" className="btn">
              <img src="/assets/vectors/social-twitter.svg" alt="twitter" />
            </a>
            <a href="www.facebook.com" className="btn">
              <img src="/assets/vectors/social-insta.svg" alt="insta" />
            </a>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="row gy-4 justify-content-center">
            <div className="col-xl-4 col-lg-3 col-sm-6">
              <h5>{content[appLanguage].text1}</h5>

              <div className="links">
                <Link href="/home">{content[appLanguage].text2}</Link>
                <Link href="/home">{content[appLanguage].text3}</Link>
                <Link href="/home">{content[appLanguage].text4}</Link>
                <Link href="/home">{content[appLanguage].text5}</Link>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <h5>{content[appLanguage].text6}</h5>

              <div className="links">
                <Link href="/home">{content[appLanguage].text7}</Link>
                <Link href="/home">{content[appLanguage].text8}</Link>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5 col-sm-6">
              <h5>Contact</h5>

              <div className="links">
                <a
                  href="tel:+49(0)5117639940"
                  className="d-flex align-items-start"
                >
                  <img
                    className="contact-icon"
                    src="/assets/vectors/contact-phone.svg"
                    alt="phone"
                  />
                  <div className="text ms-2">
                    <h6>{content[appLanguage].text10}</h6>
                    <div className="fs-16 text-light-1 mt-1">
                      +49 (0) 511 763 99 40
                    </div>
                  </div>
                </a>
                <a
                  href="mailto:www.kanzlei-duran.eu"
                  className="d-flex align-items-start mt-4"
                >
                  <img
                    className="contact-icon"
                    src="/assets/vectors/contact-mail.svg"
                    alt="mail"
                  />
                  <div className="text ms-2">
                    <h6>{content[appLanguage].text11}</h6>
                    <div className="fs-16 text-light-1">
                      www.kanzlei-duran.eu
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </GridContainer>

      <div className="copyright">©2022 by Lorem Ipsum. All Rights Reserved</div>
    </Section>
  );
};

export default Footer;
