import React from "react";
import "./Navigation.css";
import Symbol from "./coronavirus-24px.svg";

const Navigation = () => {
  return (
    <div className="navbar">
      <a className="navbar-brand" href="/Deep-Dive-into-COVID-Frontend">
        <img src={Symbol} alt="" />
        COVIZ{" "}
      </a>
      <div className="links">
        <a href="/Deep-Dive-into-COVID-Frontend/trends">TRENDS</a>
        <a href="/Deep-Dive-into-COVID-Frontend/compare">COMPARE</a>
        <a href="/Deep-Dive-into-COVID-Frontend/predict">PREDICT</a>
        <a href="/Deep-Dive-into-COVID-Frontend/about">PRODUCT</a>
      </div>
    </div>
  );
};

export default Navigation;
