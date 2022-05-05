import React, { useContext } from "react";
import Link from "next/link";
import GridContainer from "../../../components/GridContainer";
import Section from "../../../components/Section";
import { GlobalContext } from "../../../context/GlobalContext";

const content = {
  English: {
    text1: "Register",
    text2: "already a member?",
    text3: "Login",
  },
  Spanish: {
    text1: "Registro",
    text2: "¿Ya eres usuario?",
    text3: "Acceso",
  },
};

const Form = () => {
  const {
    state: { appLanguage },
  } = useContext(GlobalContext);

  return (
    <Section id="form-register">
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
          <div className="col-12 col-md-6">
            <label htmlFor="exampleInputEmail1" className="form-label">
              First Name
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter first name"
            />
          </div>
          <div className="col-12 col-md-6">
            <label htmlFor="exampleInputEmail1" className="form-label">
              last Name
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter last name"
            />
          </div>
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
              Phone Number
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter phone number"
            />
          </div>
          <div className="col-12 col-md-6">
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
          <div className="col-12 col-md-6">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Re-enter Password
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Re-enter password"
            />
          </div>
          <div className="col-12">
            <button className="btn btn-primary login_btn w-100">
              Register
            </button>
          </div>
          <div className="col-12 register_inst text-center">
            {content[appLanguage].text2}{" "}
            <Link href="/login">{content[appLanguage].text3}</Link>
          </div>
        </GridContainer>
      </div>
    </Section>
  );
};

export default Form;
