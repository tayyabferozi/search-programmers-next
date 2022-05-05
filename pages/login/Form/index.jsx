import React, { useContext } from "react";
import Link from "next/link";
import GridContainer from "../../../components/GridContainer";
import Section from "../../../components/Section";
import { GlobalContext } from "../../../context/GlobalContext";

const content = {
  English: {
    text1: "Login",
    text2: "Not a member?",
    text3: "Register",
  },
  Spanish: {
    text1: "acceso",
    text2: "¿No es un miembro?",
    text3: "Registro",
  },
};

const Form = () => {
  const {
    state: { appLanguage },
  } = useContext(GlobalContext);

  return (
    <Section id="form-login">
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
        <h1 className="login_text text-start">{content[appLanguage].text1}</h1>
        <br />
        <br />

        <GridContainer>
          <div className="col-12">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter email"
            />
          </div>
          <div className="col-12">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Password
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter password"
            />
          </div>
          <div className="col-12">
            <button className="btn btn-primary login_btn w-100">Login</button>
          </div>
          <div className="col-12 register_inst text-center">
            {content[appLanguage].text2}{" "}
            <Link href="/register">{content[appLanguage].text3}</Link>
          </div>
        </GridContainer>
      </div>
    </Section>
  );
};

export default Form;
