import React from 'react'
import Plotly from 'plotly.js/dist/plotly-cartesian';
import createPlotlyComponent from 'react-plotly.js/factory';

const Plot = createPlotlyComponent(Plotly);

const VizAPI = ({data, layout}) => {

    return (
        <div>
            <Plot data={data} layout={layout} /> 
        </div>
    )
}

export default VizAPI