import React from "react";
// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";
// Include the fusioncharts library
import FusionCharts from "fusioncharts";
// Include the chart type
import Column2D from "fusioncharts/fusioncharts.charts";
// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);
// STEP 2 - Chart Data , , , ,, June, July, August, September, October, November, and December
const chartData = [
  {
    label: "January",
    value: "290"
  },
  {
    label: "February",
    value: "260"
  },
  {
    label: "March",
    value: "180"
  },
  {
    label: "April",
    value: "140"
  },
  {
    label: " May",
    value: "115"
  },
  {
    label: "June",
    value: "100"
  },
  {
    label: "July",
    value: "30"
  }
  ,
  {
    label: "August",
    value: "30"
  }
  ,
  {
    label: "September",
    value: "30"
  }
  ,
  {
    label: "October",
    value: "30"
  }
  ,
  {
    label: "November",
    value: "30"
  }
  ,
  {
    label: "December",
    value: "30"
  }
];
// STEP 3 - Creating the JSON object to store the chart configurations
const chartConfigs = {
  type: "column2d", // The chart type
  width: "100%", // Width of the chart
  height: "450", // Height of the chart
  dataFormat: "json", // Data type
  dataSource: {
    // Chart Configuration
    chart: {
      //Set the chart caption
      caption: "User register in year 2022",
      //Set the chart subcaption
      subCaption: "",
      //Set the x-axis name
      xAxisName: "Year",
      //Set the y-axis name
      yAxisName: "Number of user",
      numberSuffix: "K",
      //Set the theme for your chart
      theme: "fusion",
        "palettecolors": "5d62b5,29c3be,f2726f,#037c6e"
     
    },
    // Chart Data
    data: chartData
  }
};

function Linechart() {
  return (
    <div className=""><ReactFC {...chartConfigs} /></div>
  )
}

export default Linechart