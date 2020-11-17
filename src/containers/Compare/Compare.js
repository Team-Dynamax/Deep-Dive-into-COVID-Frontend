import React, { useState, useEffect } from "react";
import '../../App.css';
import { DropDown, MultiSelect } from "./../../components/DropDown/DropDown";
import COVIDBG from "../DashBoard/CORONA_VIRUS1.png";
import VIZ2 from "./VIZ2.jpeg";
import {
  getCountries,
  getCharts,
  getMetrics,
  createHeaders,
  putHeadings,
  formatOptions
} from "./../../services/API";

export const Compare = () => {
  // fetch headings
  const [countries, setCountries] = useState([
    "Barbados",
    "Trinidad and Tobago",
  ]);
  const [charts, setCharts] = useState(["Line Chart"]);
  const [metrics, setMetrics] = useState(["Total Cases"]);

  // pull from JSON
  useEffect(() => {
    getCountries().then((response) => setCountries(response.data));
    getCharts().then((response) => setCharts(response.data));
    getMetrics().then((response) => setMetrics(formatOptions(response.data.numerical)));
  }, []);

  // selected options
  const [selectedCountries, setSelectedCountries] = useState([
    countries[0],
    countries[1],
  ]);
  const [feature, setFeature] = useState(metrics[0]);
  const [chart, setChart] = useState(charts[0]);

  // creates a JSON of the selected headings
  const [options, setOptions] = useState(
    createHeaders(selectedCountries, chart, feature)
  );

  useEffect(() => putHeadings(options), [options]);

  // to set options
  const handleCountries = (select) => setSelectedCountries(select);
  const handleFeature = (select) => setFeature(select);
  const handleChart = (select) => setChart(select);
  console.log(chart)

  // for button to submit changes
  const handleSubmit = () =>
    setOptions(createHeaders(selectedCountries, chart, feature));

  return (
    <div className="bg" style={{ backgroundImage: `url(${COVIDBG})` }}>
      <div className="container">
        <img className="center" src={VIZ2} alt="" />
      </div>

      <div className="box">
        <div className="inside"></div>
        <MultiSelect
          label="countries"
          list={countries}
          choice={handleCountries}
        />
        <br></br>
        <DropDown label="chart" list={charts} choice={handleChart} />
        <br></br>
        <DropDown label="metric" list={metrics} choice={handleFeature} />
        <div>
          <br></br>
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
