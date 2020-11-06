import React, { useState } from "react";
import "./Trends.css";
import DropDown from '../../components/DropDown/DropDown';
import COVIDBG from "../DashBoard/CORONA_VIRUS1.png";
import VIZ from "./Viz.jpeg";

// 1 Send headings
// 2 make button
// 3 fetch viz

const countries = ['Trinidad', 'Aruba', 'Bahamas', 'Cuba', 'Argentina', 'England', 'Italy', 'Barbados'];
const charts = ['Pie Chart', 'Bar Chart', 'Line Chart'];
const metrics = ['New Cases', 'New Deaths', 'Total Cases', 'Total Tests'];

export const Trends = () => {

  return (
    <div className="bg" style={{ backgroundImage: `url(${COVIDBG})` }}>
      <div className="container">
        <img className="center" src={VIZ} alt="" />
      </div>

      <div className='box'>
         <br></br>
         <DropDown label='country' list={countries} /> 
         <br></br>
         <DropDown label='chart' list={charts} /> 
         <br></br>
         <DropDown label='metric' list={metrics} /> 
         <br></br>
      </div>
      <br></br>
    </div>
  );
};

export default Trends
