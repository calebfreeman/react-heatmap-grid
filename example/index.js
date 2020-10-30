import React from "react";
import ReactDOM from "react-dom";
import HeatMap from "../src";

const xLabels = new Array(24).fill(0).map((_, i) => `${i+1000}`);

// Display only even labels
const xLabelsVisibility = new Array(24)
  .fill(0)
  .map((_, i) => (i % 2 === 0 ? true : false));

const yLabels = ["Sun", "Mon", "jaslkhsakjhsakjhsakjhsak", "Wed", "Thu", "Friday"];
const data = new Array(yLabels.length)
  .fill(0)
  .map(() =>
    new Array(xLabels.length).fill(0).map(() => Math.floor(Math.random() * 100))
  );

ReactDOM.render(
  <HeatMap
    xLabels={xLabels}
    yLabels={yLabels}
    xLabelsLocation={"top"}
    //xLabelsVisibility={xLabelsVisibility}
    yLabelStyles={{backgroundColor:'red',borderColor:'red',paddingTop:'12px'}}
    xLabelWidth={null}
    yLabelWidth={null}
    data={data}
    //squares
    onClick={(x, y) => alert(`Clicked ${x}, ${y}`)}
    cellStyle={(background, value, min, max, data, x, y) => ({
      background: `rgb(12, 160, 244, ${1 - (max - value) / (max - min)})`,
      fontSize: "11px",
      fontFamily: "Arial",
    })}
    cellRender={value => value && `${value}%`}
    title={(value, unit, index) => value && `${value}-${xLabels[index]}`}
  />,
  document.getElementById("app")
);
