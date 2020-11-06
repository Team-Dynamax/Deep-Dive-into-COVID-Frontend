const formatString = (str) => str.replace(/ /g, '_').toLowerCase()


export const createHeaders = (countries, chart, feature) => {

    return (
      {  "countries" :  countries,
        "chart" :  formatString(chart),
    "feature" :   formatString(feature)
      } 
    )
}