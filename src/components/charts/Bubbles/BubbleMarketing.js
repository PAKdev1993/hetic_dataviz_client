import React, { Component } from "react";
import ReactBubbleChart from "react-d3-bubbles";

class Bubble extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Marketing: [
        {
          index: 0,
          value: "9%",
          name: "Bac général",
          color: "#9BBDA7",
          radius: 59,
          tooltip: "Bac général: 9%"
        },
        {
          index: 1,
          value: "75%",
          name: "Études supérieures",
          color: "#377C4E",
          radius: 120,
          tooltip: "Études supérieures: 75%"
        },
        {
          index: 2,
          value: "9%",
          name: "Sans diplômes",
          color: "#9BBDA7",
          radius: 59,
          tooltip: "Sans diplômes: 9%"
        },
        {
          index: 3,
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
        <ReactBubbleChart data={this.state.Marketing} />
      </div>
    );
  }
}
export default Bubble;
