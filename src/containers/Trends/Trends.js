import React, { useState, useEffect } from "react";
import "./Trends.css";
import DropDown from "../../components/DropDown/DropDown";
import COVIDBG from "../DashBoard/CORONA_VIRUS1.png";
import VIZ from "./Viz.jpeg";
import {
  getCountries,
  getCharts,
  getMetrics,
  createHeaders,
  putHeadings,
} from "./../../services/API";

// 1 Fetch Viz
// 2 Fix bug: Invisible Text when typing
// 3 Implement Features array
// 4 Refactor Code

export const Trends = () => {
  // fetch headings
  const [countries, setCountries] = useState(["Trinidad and Tobago"]);
  const [charts, setCharts] = useState(["Line Chart"]);
  const [metrics, setMetrics] = useState(["Total Cases"]);

  // pull from JSON
  useEffect(() => {
    getCountries().then((response) => setCountries(response.data));

    getCharts().then((response) => setCharts(response.data));

    getMetrics().then((response) => setMetrics(response.data));
  }, []);

  // selected options
  const [country, setCountry] = useState(countries[0]);
  const [feature, setFeature] = useState(metrics[0]);
  const [chart, setChart] = useState(charts[0]);

  // creates a JSON of the selected headings
  const [options, setOptions] = useState(
    createHeaders(country, chart, feature)
  );

  useEffect(() => putHeadings(options), [options]);

  // to set options
  const handleCountry = (select) => setCountry(select);
  const handleFeature = (select) => setFeature(select);
  const handleChart = (select) => setChart(select);

  // for button to submit changes
  const handleSubmit = () => setOptions(createHeaders(country, chart, feature));

  return (
    <div className="bg" style={{ backgroundImage: `url(${COVIDBG})` }}>
      <div className="container">
        <img className="center" src={VIZ} alt="" />
      </div>

      <div className="box">
      
        <div className="inside">
          <DropDown label="country" list={countries} choice={handleCountry} />
          <br></br>
          <DropDown label="chart" list={charts} choice={handleChart} />
          <br></br>
          <DropDown label="metric" list={metrics} choice={handleFeature} />
        </div>
       
        <div>
          <button
            type="button"
            className="update"
            onClick={handleSubmit}
          ></button>
        </div>
      </div>
      <br></br>
    </div>
  );
};
