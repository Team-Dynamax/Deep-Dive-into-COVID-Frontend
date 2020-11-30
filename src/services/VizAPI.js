import React from "react";
import Plotly from "plotly.js/dist/plotly-cartesian";
import createPlotlyComponent from "react-plotly.js/factory";
import { ReactComponent as Spin } from "../styles/icons/fillsync-24px.svg";

const Plot = createPlotlyComponent(Plotly);

const VizAPI = ({ data, layout }) => {
  const Load = () => {
    if (layout === null) {
      return <Spin className="spinner" alt="" />;
    } else return <Plot data={data} layout={layout} />;
  };

  return (
    <div className="center">
      <Load />
    </div>
  );
};

export default VizAPI;
