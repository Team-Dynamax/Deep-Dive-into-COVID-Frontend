import axios from "axios";

const baseURL = "https://td-coviz.herokuapp.com/api";
const dashURL = "https://api.covid19api.com/summary";

const formatString1 = (str) => str.replace(/ /g, "_").toLowerCase();
const formatString2 = (str) => str.replace(/_/g, " ");

export const formatOptions = (options) =>
  options.map((item) => formatString2(item));

export const getStats = async () => await axios.get(dashURL);

export const getCountries = async () =>
  await axios.get(baseURL + "/options/countries");

export const getMetrics = async () =>
  await axios.get(baseURL + "/options/numerical");

export const putHeadings = async (options) =>
  await axios.put(baseURL + "/charts/lineplot", options);

export const createHeaders = (countries, feature) => {
  return {
    countries: countries,
    feature: formatString1(feature),
  };
};
