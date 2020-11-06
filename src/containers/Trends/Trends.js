import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Trends.css";
import DropDown from "../../components/DropDown/DropDown";
import {createHeaders} from "../../helpers/createHeaders";
import COVIDBG from "../DashBoard/CORONA_VIRUS1.png";
import VIZ from "./Viz.jpeg";

// 1 fetch viz

export const Trends = () => {

  // fetch headings
  const [countries, setCountries] = useState(["Trinidad and Tobago"])
  const [charts, setCharts] = useState(["Pie Chart"])
  const [metrics, setMetrics] = useState(["Total Cases"])


  // pull from JSON
  useEffect(() => {
    axios.get("http://localhost:3001/countries").then((response) => {
      setCountries(response.data)
    })
    axios.get("http://localhost:3001/charts").then((response) => {
      setCharts(response.data)
    })
    axios.get("http://localhost:3001/metrics").then((response) => {
      setMetrics(response.data)
    })
  }, [])

  // selected options
  const [country, setCountry] = useState(countries[0])
  const [feature, setFeature] = useState(metrics[0])
  const [chart, setChart] = useState(charts[0])


  // to set options
  const handleCountry = (select) =>  setCountry(select)
  const handleFeature= (select) =>  setFeature(select)
  const handleChart = (select) =>  setChart(select)

  const [options, setOptions] = useState(createHeaders(country, chart, feature))

  // for button to submit changes
  const handleSubmit = () => {
    setOptions(createHeaders(country, chart, feature))
  }

  useEffect(() => {
    axios.put('http://localhost:3002/headings/1', options)
    .then(response => console.log(response.data))
  }, [options])
  


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
        <br></br>

        <div ><button className='update' onClick={handleSubmit}></button></div>
      </div>
      <br></br>
    </div>
  );
};

export default Trends;
