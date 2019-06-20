import React, { createRef } from "react";
import * as d3 from "d3";
import origin from "./bac.json";
import chroma from "chroma-js";

const width = 400;
const height = 400;
const radius = 20;

const colors = chroma.scale(["#377c4e", "#377c4e", "#377C4E"]);
const colorScale = d3.scaleLinear();
// const simulation = d3
//   .forceSimulation()
//   .alphaDecay(0.1)
//   .velocityDecay(0.15);
//.force("center", d3.forceCenter(width / 2, height / 2))
//.force("charge", d3.forceManyBody(-20))
//.force("collide", d3.forceCollide(radius))
//.stop();
const container = createRef();
class Bubble extends React.Component {
  state = {
    cursus: "bachelor",
    nodes: origin.bachelor.map(_ => ({}))
  };

  componentWillMount() {
    //simulation.on("tick", this.forceTick);
    const numberExtent = d3.extent(origin.bachelor, d => d.population);
    colorScale.domain(numberExtent);
    //this.setState({ origin: origin.web });
  }

  componentDidMount() {
    this.svg = d3.select(container.current);
    this.renderCircles();
    //simulation
    //.nodes(this.state.origin)
    //.alpha(0.9)
    //.restart();
  }

  componentDidUpdate() {
    this.renderCircles();
  }

  renderCircles = () => {
    console.log(this.state.cursus);
    this.circles = this.svg
      .selectAll("g")
      .data(origin[this.state.cursus], d => d.name);
    console.log(this.circles);
    //exit
    this.circles //.exit()
      .remove();
    //enter + update
    this.circles = this.circles
      .enter()
      .append("g")
      .attr(
        "transform",
        (d, i) => console.log(d) || `translate(${i * 100},${i * 100})`
      );

    this.circles
      .append("circle")
      .attr("r", d => `${d.population / 1.5}%`)
      .attr("fill-opacity", 0.5)
      .attr("stroke-width", 3)
      //.merge(this.circles)
      .attr("fill", d => colors(colorScale(d.population)))
      .attr("stroke", d => colors(colorScale(d.population)));

    //text
    this.circles
      .append("text")
      .text(d => `${d.name} (${d.population}%)`)
      .attr("fill", "black")
      .attr("text-anchor", "middle")
      .style("font-size", "12px");

    //this.resetTick();

    d3.forceSimulation()
      .alphaDecay(0.1)
      .velocityDecay(0.15)
      //.nodes(origin[this.state.cursus])
      .alpha(0.9)
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("charge", d3.forceManyBody(-20))
      .force("collide", d3.forceCollide(radius))
      .nodes(this.state.nodes)
      //.restart();
      .on("tick", this.forceTick);
  };

  forceTick = () => {
    this.circles.attr(
      "transform",
      (d, i) => `translate(${this.state.nodes[i].x},${this.state.nodes[i].y})`
    );
    //.select("circle")
    //.attr("cx", d => d.x)
    //.attr("cy", d => d.y);
  };

  resetTick = () => {
    this.circles.attr("transform", `translate(${width / 2},${height / 2})`);
    //.select("circle")
    //.attr("cx", width / 2)
    //.attr("cy", height / 2);
  };

  displayData = cursus => () => {
    if (origin[cursus] === this.state.origin) {
      //return;
    }

    this.setState(
      {
        cursus,
        nodes: origin.bachelor.map(_ => ({}))
      },
      () => {
        this.renderCircles();
      }
    );
  };

  render() {
    return (
      <div>
        <div>
          <button onClick={this.displayData("bachelor")}>Bachelor</button>
          <button onClick={this.displayData("web")}>Web</button>
          <button onClick={this.displayData("marketing")}>Marketing</button>
        </div>
        <svg width={width} height={height} ref={container} />
      </div>
    );
  }
}

export default Bubble;
