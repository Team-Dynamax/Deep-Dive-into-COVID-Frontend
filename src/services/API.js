import axios from "axios";

const formatString = (str) => str.replace(/ /g, "_").toLowerCase();

export const getCountries = async () =>
  await axios.get("http://localhost:3001/countries").catch();

export const getCharts = async () =>
  await axios.get("http://localhost:3001/charts").catch();

export const getMetrics = async () =>
  await axios.get("http://localhost:3001/metrics").catch();

export const putHeadings = async (options) =>
  await axios.put("http://localhost:3002/headings/1", options);

export const createHeaders = (countries, chart, feature) => {
  return {
    countries: countries,
    chart: formatString(chart),
    feature: formatString(feature),
  };
};
