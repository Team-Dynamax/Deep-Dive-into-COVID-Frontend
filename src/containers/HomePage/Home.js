import React from "react";
import DashBoard from "../../containers/DashBoard/DashBoard";
import Card from "../../components/Card/Card";
import * as list from "./Data";

export const Home = () => {
  return (
    <div>
      <DashBoard />

      <Card
        color="background-black"
        title="TRENDS VIEWER"
        description="Interactive visualizations to explore COVID-19 growth in a selected country."
        list={list.oneVisual}
        button="View Trends"
        link="/trends"
      />

      <Card
        color="background-blue"
        title="COMPARISON VIEWER"
        description="Compare COVID-19 growth for up to 10 selected countries."
        list={list.compareVisual}
        button="Compare Countries"
        link="/compare"
      />
      
    </div>
  )
}