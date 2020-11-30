import React, { useEffect, useState } from "react";
import "./DashBoard.css";
import COVIDBG from "../../styles/CORONA_VIRUS1.png";
import { getStats } from "../../services/API";

// Indicates errors in the API
const Update = ({ updated }) => {
  if (updated !== "") {
    return <div className="message">! {updated}</div>;
  } else return <div></div>;
};

export const DashBoard = () => {
  // Stores Metrics
  const [stats, setStats] = useState({});
  const [state, setState] = useState("");

  useEffect(() => {
    getStats().then((response) => {
      setStats(response.data["Global"]);
      setState(response.data["Message"]);
    });
  }, []);

  return (
    <div className="bg" style={{ backgroundImage: `url(${COVIDBG})` }}>
      <div className="row">
        <br></br>
        <br></br>
        <br></br>

        <div className="column">
          <div className="slideup">
            <h1 className="title">TRACKING COVID-19</h1>
            <h2 className="listing">WORLDWIDE</h2>

            <p className="dl">
              <br></br>
              FROM OUR WORLD IN DATA
              <br></br>
              <br></br>
              <br></br>
              UPDATED 10PM DAILY
              <br></br>
            </p>
          </div>
        </div>

        <div className="column">
          <div className="stats">
            <Update updated={state} />
            TOTAL CASES AS OF TODAY:
            <div className="typewriter">
              <p className="metric">{stats["TotalConfirmed"]}</p>
            </div>
            <br></br>
            NEW CASES AS OF TODAY:
            <div className="typewriter">
              <p className="metric">{stats["NewConfirmed"]}</p>
            </div>
            <br></br>
            TOTAL DEATHS AS OF TODAY:
            <div className="typewriter">
              <p className="metric">{stats["TotalDeaths"]}</p>
            </div>
            <br></br>
            NEW DEATHS AS OF TODAY:
            <div className="typewriter">
              <p className="metric">{stats["TotalDeaths"]}</p>
            </div>
          </div>
        </div>
      </div>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};

export default DashBoard;
