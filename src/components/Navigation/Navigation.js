import React from "react";
import "./Navigation.css";
import Symbol from "./coronavirus-24px.svg";

const Navigation = () => {
  return (
    <div className="navbar">
      <a className="navbar-brand" href="/">
        <img src={Symbol} alt="" />
        COVIZ
      </a>
      <div className="links">
        <a href="/trends">TRENDS</a>
        <a href="/compare">COMPARE</a>
        <a href="/predict">PREDICT</a>
        <a href="/about">PRODUCT</a>
      </div>
    </div>
  );
};

export default Navigation;
