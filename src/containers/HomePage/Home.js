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
        description="Comparison reports on COVID-19 cases for up to 10 selected countries."
        list={list.compareVisual}
        button="Produce Comparison Reports"
        link="/compare"
      />

      <Card
        color="background-indigo"
        title="ANALYTICS VIEWER"
        description="Visualizations produced from requested predictions."
        image=""
        list={list.predictVisual}
        button="Predict Future Trends"
        link="/predict"
      />
    </div>
  )
}