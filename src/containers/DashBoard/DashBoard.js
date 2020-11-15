import React from "react";
import "./DashBoard.css";
import COVIDBG from "./CORONA_VIRUS1.png";
import cloudDL from "./../../styles/icons/cloud_download-24px.svg";

// TASKS
// 1. Implement State for interactive elements
// 2. Refactor code
// 3. Pad zeros for Time


export const DashBoard = () => {
  const cases = 14440213;
  const deaths = 111022;

  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  const update = new Date();

  const Updated = () => (
    <p className="dl">
      <img src={cloudDL} alt="" /> {months[update.getMonth()]} {update.getDate()}{" "}
      {update.getFullYear()} - {update.getHours()}:{update.getMinutes()}{" "}
    </p>
  );

  return (
    <div className="bg" style={{ backgroundImage: `url(${COVIDBG})` }}>
      <br></br>
      <br></br>
      <br></br>

      <h1 className="title">TRACKING COVID-19</h1>

      <h2 className="listing">IN THE CARIBBEAN</h2>

      <br></br>
      <br></br>
      <div>
        <div className="left">{cases}</div>
        <div className="right">{deaths}</div>
      </div>
      <br></br>
      <div>
        <div className="Left1">CASES</div>
        <div className="Right1"> DEATHS</div>
      </div>

      <br></br>
      <br></br>

     <Updated />

      <br></br>
      <br></br>
    </div>
  );
};

export default DashBoard;
