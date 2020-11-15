import React, { useState, useEffect } from "react";
import '../../App.css';
import DropDown from "../../components/DropDown/DropDown";
import {
  getCountries,
  getCharts,
  getMetrics,
  createHeaders,
  putHeadings,
} from "./../../services/API";
import COVIDBG from "../DashBoard/CORONA_VIRUS1.png";
import VIZ from "./Viz.jpeg";

// 1 Fetch Viz
// 2 Fix bug: Invisible Text when typing
// 3 Implement Features array

export const Predict = () => {
  // fetch headings
  const [countries, setCountries] = useState(["Trinidad and Tobago"]);
  const [charts, setCharts] = useState(["Pie Chart"]);
  const [metrics, setMetrics] = useState(["Total Cases"]);
  // const [spans, setSpan] = useState(["NULL"]);

  // pull from JSON
  useEffect(() => {
    getCountries().then((response) => setCountries(response.data));

    getCharts().then((response) => setCharts(response.data));

    getMetrics().then((response) => setMetrics(response.data));

    // getSpan.then(response => setSpan(response.data));
  }, []);

  // selected options
  const [country, setCountry] = useState(countries[0]);
  const [feature, setFeature] = useState(metrics[0]);
  const [chart, setChart] = useState(charts[0]);
  // const [span, setSpans] = useState(spans[0]);

  // to set options
  const handleCountry = (select) => setCountry(select);
  const handleFeature = (select) => setFeature(select);
  const handleChart = (select) => setChart(select);
  // const handleSpan = (select) => setSpans(select);

  const [options, setOptions] = useState(
    createHeaders(country, chart, feature)
    // createHeaders(country, chart, feature, span)
  );

  useEffect(() => putHeadings(options), [options]);

  // for button to submit changes
  const handleSubmit = () => {
    setOptions(createHeaders(country, chart, feature));
    // setOptions(createHeaders(country, chart, feature, span));
  };

  return (
    <div className="bg" style={{ backgroundImage: `url(${COVIDBG})` }}>
      <div className="container">
        <img className="center" src={VIZ} alt="" />
      </div>

      <div className="box">
        <br></br>
        <DropDown label="country" list={countries} choice={handleCountry} />
        <br></br>
        <DropDown label="chart" list={charts} choice={handleChart} />
        <br></br>
        <DropDown label="metric" list={metrics} choice={handleFeature} />
        {/* <br></br>
        <DropDown label="span" list={spans} choice={handleSpan} /> */}
        <br></br>
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
export default Predict;
