import React, { useState, useEffect } from "react";
import "../../App.css";
import DropDown from "../../components/DropDown/DropDown";
import COVIDBG from "../DashBoard/CORONA_VIRUS1.png";
import {
  getCountries,
  getCharts,
  getMetrics,
  createHeaders,
  putHeadings,
  formatOptions,
} from "./../../services/API";
import VizAPI from "./../../services/VizAPI";

// 1 Fetch Viz
// 2 Fix bug: Invisible Text when typing

export const Trends = () => {
  // fetch headings
  const [countries, setCountries] = useState(["Trinidad and Tobago"]);
  const [charts, setCharts] = useState(["lineplot"]);
  const [metrics, setMetrics] = useState(["total cases"]);
  const [graph, setGraph] = useState({ data: [], layout: null });

  // pull from JSON
  useEffect(() => {
    getCountries().then((response) => setCountries(response.data));

    getCharts().then((response) => setCharts(response.data));

    getMetrics().then((response) => setMetrics(formatOptions(response.data)));
  }, []);

  // selected options
  const [country, setCountry] = useState(countries[0]);
  const [feature, setFeature] = useState(metrics[0]);
  const [chart, setChart] = useState(charts[0]);

  // creates a JSON of the selected headings
  const [options, setOptions] = useState(createHeaders([country], feature));

  useEffect(() => {
    putHeadings(options).then((response) => setGraph(response.data));
  }, [options]);

  // to set options
  const handleCountry = (select) => setCountry(select);
  const handleFeature = (select) => setFeature(select);
  const handleChart = (select) => setChart(select);
  console.log(chart);

  // for button to submit changes
  const handleSubmit = () => setOptions(createHeaders([country], feature));

  return (
    <div className="bg" style={{ backgroundImage: `url(${COVIDBG})` }}>
      <div className="container">
        <div className="center">
          <VizAPI data={graph.data} layout={graph.layout} />
        </div>
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
