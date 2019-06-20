import React, { Component } from "react";
import ReactBubbleChart from "react-d3-bubbles";

class Bubble extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Web: [
        {
          index: 0,
          value: "8%",
          name: "Bac pro",
          color: "#9BBDA7",
          radius: 53,
          tooltip: "Bac pro: 8%"
        },
        {
          index: 1,
          value: "23%",
          name: "Bac général",
          color: "#73A383",
          radius: 72,
          tooltip: "Bac général: 23%"
        },
        {
          index: 2,
          value: "43%",
          name: "Études supérieures",
          color: "#73A383",
          radius: 95,
          tooltip: "Études supérieures: 43%"
        },
        {
          index: 3,
          value: "20%",
          name: "Sans diplômes",
          color: "#73A383",
          radius: 67,
          tooltip: "Sans diplômes: 20%"
        },
        {
          index: 4,
          value: "6%",
          name: "Chômeur",
          color: "#9BBDA7",
          radius: 52,
          tooltip: "Chômeur: 6%"
        }
      ]
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div className="BubbleChart">
        <ReactBubbleChart data={this.state.Web} />
      </div>
    );
  }
}
export default Bubble;
