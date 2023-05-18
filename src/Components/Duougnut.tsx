import React from 'react'
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    caption: "Ratio of user in our app",
    subcaption: "For all users ",
    showpercentvalues: "1",
    defaultcenterlabel: "",
    aligncaptionwithcanvas: "0",
    captionpadding: "0",
    decimals: "1",
    plottooltext:
      "<b>$percentValue</b> of our Android users are on <b>$label</b>",
    centerlabel: "# Users: $value",
    theme: "fusion"
  },
  data: [
    {
      label: "Male passenger",
      value: "1000"
    },
    {
      label: "female passenger",
      value: "5300"
    },
    {
      label: "male driver",
      value: "10500"
    },
    {
      label: "female driver",
      value: "18900"
    },
   
  ]
};

function Duougnut() {
  return (
    <div>
        <ReactFusioncharts
        type="doughnut2d"
        width="100%"
        height="50%"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    </div>
  )
}

export default Duougnut