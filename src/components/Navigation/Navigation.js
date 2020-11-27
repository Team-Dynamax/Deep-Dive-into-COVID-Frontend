import React from "react";
import "./Navigation.css";
import { ReactComponent as Symbol } from "../../styles/icons/coronavirus-24px.svg";

// Logo links to homepage
// Provide links to other pages

const Navigation = () => {
  return (
    <div className="navbar">
      <a className="navbar-brand" href="/">
        <Symbol className="icon" alt="" />
        <div className="label"> COVIZ</div>
      </a>

      <div className="links">
        <a href="/trends">TRENDS</a>
        <a href="/compare">COMPARE</a>
        <a href="https://github.com/Team-Dynamax">PRODUCT</a>
      </div>
    </div>
  );
};

export default Navigation;
