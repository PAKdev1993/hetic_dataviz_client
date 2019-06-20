import React from "react";
import ReactBubbleChart from "react-d3-bubbles";

const bachelorsData = [
  {
    index: 0,
    value: "5%",
    name: "Bac pro",
    color: "#9BBDA7",
    radius: 50,
    tooltip: "Bac pro: 5%"
  },
  {
    index: 1,
    value: "18%",
    name: "Bac général",
    color: "#73A383",
    radius: 68,
    tooltip: "Bac général: 18%"
  },
  {
    index: 2,
    value: "55%",
    name: "Études supérieures",
    color: "#377C4E",
    radius: 100,
    tooltip: "Études supérieures: 55%"
  },
  {
    index: 3,
    value: "16%",
    name: "Sans diplômes",
    color: "#73A383",
    radius: 60,
    tooltip: "Sans diplômes: 16%"
  },
  {
    index: 4,
    value: "6%",
    name: "Chômeur",
    color: "#9BBDA7",
    radius: 52,
    tooltip: "Chômeur: 6%"
  }
];

function Bubble() {
  return (
    <div className="BubbleChart">
      <ReactBubbleChart data={bachelorsData} />
    </div>
  );
}

export default Bubble;
