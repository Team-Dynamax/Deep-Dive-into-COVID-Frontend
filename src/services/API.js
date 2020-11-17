import axios from "axios";

const formatString1 = (str) => str.replace(/ /g, "_").toLowerCase();
const formatString2 = (str) => str.replace(/_/g, ' ');

export const formatOptions = (options) => {

  return options.map(item => formatString2(item))

}

export const getCountries = async () =>
  await axios.get("http://localhost:3001/countries");

export const getCharts = async () =>
  await axios.get("http://localhost:3001/charts");

export const getMetrics = async () =>
  await axios.get("https://deep-dive-into-coviz.herokuapp.com/options/numerical");

export const putHeadings = async (options) =>
  await axios.put("https://deep-dive-into-coviz.herokuapp.com/charts/lineplot/1", options).catch(err => console.log(err));

export const createHeaders = (countries, feature) => {
  return {
    countries: countries,
    feature: formatString1(feature),
  };
};
