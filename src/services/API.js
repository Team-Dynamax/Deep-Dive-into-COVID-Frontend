import axios from "axios";

const formatString1 = (str) => str.replace(/ /g, "_").toLowerCase();
const formatString2 = (str) => str.replace(/_/g, ' ');

export const formatOptions = (options) => {

  return options.map(item => formatString2(item))

}

export const getCountries = async () =>
  await axios.get("https://td-coviz.herokuapp.com/api/options/countries");

export const getCharts = async () =>
  await axios.get("https://td-coviz.herokuapp.com/api/options/charts");

export const getMetrics = async () =>
  await axios.get("https://td-coviz.herokuapp.com/api/options/numerical");

export const putHeadings = async (options) =>
  await axios.put("https://td-coviz.herokuapp.com/api/charts/lineplot", options);

export const createHeaders = (countries, feature) => {
  return {
    countries: countries,
    feature: formatString1(feature),
  };
};
