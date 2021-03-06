import React, { useState, useEffect } from "react";
import DropDown from "../../components/DropDown/DropDown";
import COVIDBG from "../../styles/CORONA_VIRUS1.png";
import {
  getCountries,
  getMetrics,
  createHeaders,
  putHeadings,
  formatOptions,
  arrayEquals,
} from "./../../services/API";
import VizAPI from "./../../services/VizAPI";

export const Trends = () => {
  // fetch headings
  const [countries, setCountries] = useState(["Trinidad and Tobago"]);
  const [metrics, setMetrics] = useState(["total cases"]);
  const [graph, setGraph] = useState({ data: [], layout: null });

  // pull from JSON
  useEffect(() => {
    getCountries().then((response) => setCountries(response.data));
    getMetrics().then((response) => setMetrics(formatOptions(response.data)));
  }, []);

  // store selected options
  const [country, setCountry] = useState(countries[0]);
  const [feature, setFeature] = useState(metrics[0]);

  // creates a JSON of the selected headings
  const [options, setOptions] = useState(createHeaders([country], feature));

  // send to visualization API
  useEffect(() => {
    setGraph({ data: [], layout: null });
    putHeadings(options).then((response) => setGraph(response.data));
  }, [options]);

  // to set options
  const handleCountry = (select) => setCountry(select);
  const handleFeature = (select) => setFeature(select);

  // for button to submit changes
  const handleSubmit = () => {
    const setHeaders = createHeaders([country], feature);
    if (
      !(
        arrayEquals(options["countries"], setHeaders["countries"]) &&
        options["feature"] === setHeaders["feature"]
      )
    ) {
      setOptions(setHeaders);
    }
  };

  return (
    <div className="bg" style={{ backgroundImage: `url(${COVIDBG})` }}>
      <div className="row">
        <br></br>

        <div className="rcolumn">
          <VizAPI data={graph.data} layout={graph.layout} />
        </div>

        <div className="lcolumn">
          <div className="box">
            <div className="inside">
              <DropDown
                label="country"
                list={countries}
                choice={handleCountry}
              />
              <br></br>
              <DropDown label="metric" list={metrics} choice={handleFeature} />
            </div>

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
