import React, { Component } from "react";
import styled from "styled-components";
import Title from "../../Title/title";
import Legend from "../../LegendCharts/legendCharts";

// Filter
import FilterGenders from "../../Filter/filterGenders";

//chart
import Polar from "../../charts/Polars/Polar";
import PolarMan from "../../charts/Polars/PolarMan";
import PolarWomen from "../../charts/Polars/PolarWomen";

const SectionStyle = styled.section`
  height: 720px;
  .contentSection {
    display: flex;
    flex-direction: row;
    height: 100%;
    align-items: center;
    .chart {
      display: flex;
      height: 100%;
      flex: 1;
      justify-content: center;
      align-items: center;
      canvas {
        height: 80% !important;
        width: 80% !important;
      }
    }
    p {
      flex: 1;
    }
  }
`;

class Section_6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      return: "Civilité"
    };
  }

  onChange = value => {
    console.log(value);
    this.setState({
      return: value
    });
  };

  changeReturn = () => {
    if (this.state.return === "Civilité") {
      return <Polar />;
    } else if (this.state.return === "Homme") {
      return <PolarMan />;
    } else if (this.state.return === "Femme") {
      return <PolarWomen />;
    }
  };

  render() {
    return (
      <SectionStyle>
        <Title title="LE BACHELOR WEBMARKETING EST-IL SUFFISANT POUR S’INSÉRER DANS LE MONDE DU TRAVAIL ?" />
        <FilterGenders change={this.onChange} />
        <Legend blockColor="#74E2CE" textLegend="Marketing/Communication" />
        <Legend blockColor="#8191E4" textLegend="Recherche d’emploi" />
        <Legend blockColor="#E4BC81" textLegend="Poursuite d’étude" />
        <div className="contentSection">
          <div className="chart">{this.changeReturn()}</div>
          <p>
            Pour le cas des étudiants en Webmarketing, il est intéressant de se
            pencher sur leur insertion dans le monde du travail. La majorité de
            ces étudiants poursuivent leurs études. Quant aux autres, soit ils
            ont trouvé leur bonheur et prennent de l’expérience dans le monde du
            marketing et de la communication, soit ils sont à la recherche d’un
            emploi.
          </p>
        </div>
      </SectionStyle>
    );
  }
}

export default Section_6;
