import React, { useState, useEffect } from "react";
import "../../App.css";
import { DropDown, MultiSelect } from "./../../components/DropDown/DropDown";
import COVIDBG from "../../styles/CORONA_VIRUS1.png";
import VizAPI from "./../../services/VizAPI";
import {
  getCountries,
  getMetrics,
  createHeaders,
  putHeadings,
  formatOptions,
} from "./../../services/API";

const Warning = ({ select }) => {
  if (select === true)
    return <div className="warning">X Please select at least 2 countries</div>;
  else return <div></div>;
};

export const Compare = () => {
  const [flag, setFlag] = useState(false);

  // fetch headings
  const [countries, setCountries] = useState([
    "Barbados",
    "Trinidad and Tobago",
  ]);
  const [metrics, setMetrics] = useState(["Total Cases"]);
  const [graph, setGraph] = useState({ data: [], layout: null });

  // pull from JSON
  useEffect(() => {
    getCountries().then((response) => setCountries(response.data));
    getMetrics().then((response) => setMetrics(formatOptions(response.data)));
  }, []);

  // selected options
  const [selectedCountries, setSelectedCountries] = useState([
    countries[0],
    countries[1],
  ]);
  const [feature, setFeature] = useState(metrics[0]);

  // creates a JSON of the selected headings
  const [options, setOptions] = useState(
    createHeaders(selectedCountries, feature)
  );

  useEffect(() => {
    putHeadings(options).then((response) => setGraph(response.data));
  }, [options]);

  // to set options
  const handleCountries = (select) => setSelectedCountries(select);
  const handleFeature = (select) => setFeature(select);

  // for button to submit changes
  // prevent less than 2 countries selection
  const handleSubmit = () => {
    if (selectedCountries.length < 2) {
      setFlag(true);
    } else {
      if (flag === true) setFlag(false);

      setOptions(createHeaders(selectedCountries, feature));
    }
  };

  return (
    <div className="bg" style={{ backgroundImage: `url(${COVIDBG})` }}>
      <div className="row">
        <br></br>
        <div className="rcolumn">
          <VizAPI data={graph.data} layout={graph.layout} />
        </div>

        <div className="mlcolumn">
          <div className="box">
            <div className="inside"></div>
            <MultiSelect
              label="countries"
              list={countries}
              choice={handleCountries}
            />
            <Warning select={flag} />
            <br></br>
            <DropDown label="metric" list={metrics} choice={handleFeature} />
            <div>
              <br></br>
              <button
                type="button"
                className="update"
                onClick={handleSubmit}
              ></button>
              <br></br>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};
