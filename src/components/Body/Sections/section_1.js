import React, { Component } from "react";
import styled from "styled-components";
import Title from "../../Title/title";

import Legend from "../../LegendCharts/legendCharts";

// Filter
import FilterDegrees from "../../Filter/filterDregrees";
import FilterYears from "../../Filter/filterYears";

//charts
import Bar2016 from "../../charts/Bars/Bar2016";
import Bar2017 from "../../charts/Bars/Bar2017";
import BubbleBachelors from "../../charts/Bubbles/BubbleBachelors";
import BubbleWeb from "../../charts/Bubbles/BubbleWeb";
import BubbleMarketing from "../../charts/Bubbles/BubbleMarketing";

const SectionStyle = styled.section`
  height: 780px;
  #part_1,
  #part_2 {
    position: relative;
    display: inline-block;
    height: 100%;
    width: 48%;
    padding: 0 10px;
    overflow: hidden;
    .charts {
      display: flex;
      .BarChart {
        height: 420px;
        padding-top: 10px;
      }
      canvas {
        width: 500px !important;
      }
    }
    .BubbleChart {
      height: 487px;
      display: flex;
      justify-content: center;
      align-items: center;
      svg {
        height: 100%;
        width: 100%;
        g {
          transform: translate(50px, 100px);
          .label {
            tspan:first-child {
              font-family: Roboto;
              font-style: normal;
              font-weight: 500;
              font-size: 16px;
            }
            tspan {
              font-weight: normal;
              font-size: 10px;
              text-transform: uppercase;
            }
          }
        }
        /* circle {
          fill: #4b8960 !important;
        } */
      }
    }
    .bold {
      font-weight: bold;
    }
  }
`;

class Section_1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      returnBubble: "Bachelors",
      returnBar: "2016"
    };
  }

  onChangeBubble = value => {
    console.log(value);
    this.setState({
      returnBubble: value
    });
  };

  changeReturnBubble = () => {
    if (this.state.returnBubble === "Bachelors") {
      return <BubbleBachelors />;
    } else if (this.state.returnBubble === "Web") {
      return <BubbleWeb />;
    } else if (this.state.returnBubble === "Marketing") {
      return <BubbleMarketing />;
    }
  };

  onChangeBar = value => {
    console.log(value);
    this.setState({
      returnBar: value
    });
  };

  changeReturnBar = () => {
    if (this.state.returnBar === "2016") {
      return <Bar2016 date="2016" />;
    } else if (this.state.returnBar === "2017") {
      return <Bar2017 date="2017" />;
    }
  };

  render() {
    return (
      <SectionStyle>
        <div id="part_1">
          <Title title="La provenance des étudiants" />
          <FilterDegrees change={this.onChangeBubble} />
          {this.changeReturnBubble()}
          <p>
            Globalement, la majorité des étudiant ont fait des études
            supérieures, le reste proviennent d’horizons très variés. Le type de
            catégories qui revient le plus est la sortie d’un bac (général,
            technologique ou professionnel). Il est également possible de
            rejoindre HETIC sans diplôme, en effet dans chaque cursus il y a
            entre 1 et 2 élèves sur 10 qui n’ont pas de diplôme.
          </p>
        </div>
        <div id="part_2">
          <Title title="Évolution des provenances par rapport a 2015" />
          <FilterYears change={this.onChangeBar} />
          <div className="legends">
            <Legend blockColor="#18CEAD" textLegend="Bac pro." />
            <Legend blockColor="#D54064" textLegend="Bac général &amp; tech." />
            <Legend blockColor="#2D47D2" textLegend="Études supérieurs" />
            <Legend blockColor="#C7CB00" textLegend="Sans diplôme" />
            <Legend blockColor="#D2902D" textLegend="Chômage" />
          </div>
          <div className="charts">{this.changeReturnBar()}</div>
          <p className="textContent">
            <span className="bold">On a vu que l’origine des étudiants était très variée, qu’en est-il
            de l’évolution au fur et à mesure des années ?</span> On remarque
            principalement que le nombre d’étudiants en reconversion
            professionnelle ou sans diplômes est en baisse. Contrairement aux
            élèves venant de bacs généraux, technologiques ou professionnelles
            qui augmentent globalement.
          </p>
        </div>
      </SectionStyle>
    );
  }
}

export default Section_1;
