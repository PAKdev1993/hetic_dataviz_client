import React, { Component } from "react";
import styled from "styled-components";
import Title from "../../Title/title";

// Filter
import FilterDegrees from "../../Filter/filterDregrees";

//chart
import Gauge from "../../charts/Gauge";

const SectionStyle = styled.section`
  height: 540px;
  .contentSection {
    display: flex;
    flex-direction: row;
    height: 100%;
    align-items: center;
    justify-content: center;
  }
`;

class Section_7 extends Component {
  state = {
    return: "Bachelors",
    data: {
      Bachelors: {
        "Technicien supérieur": "64%",
        Cadre: "8%",
        Indépendant: "28%"
      },
      Web: {
        "Technicien supérieur": "65%",
        Cadre: "9%",
        Indépendant: "26%"
      },
      Marketing: {
        "Technicien supérieur": "63%",
        Cadre: "6%",
        Indépendant: "31%"
      }
    }
  };

  onChange = value => {
    console.log(value);
    this.setState({
      return: value
    });
  };

  displayChart = () => {
    console.log(this.state.return);
    const { data } = this.state;

    return (
      <div className="contentSection">
        {Object.keys(data[this.state.return]).map(key => {
          console.log(data[this.state.return][key]);
          const fakeId = `${Math.random() * 93}`;

          return (
            <Gauge
              descriptionChart={key}
              percentage={data[this.state.return][key]}
              key={fakeId}
              styleClass={this.setClasses(key)}
            />
          );
        })}
      </div>
    );
  };

  setClasses = key => {
    let styleClass = "";
    if (key === "Technicien supérieur") {
      styleClass = "technicien";
    } else if (key === "Cadre") {
      styleClass = "cadre";
    } else {
      styleClass = "independant";
    }
    return styleClass;
  };

  render() {
    return (
      <SectionStyle>
        <Title title="LA CATÉGORIE SOCIO-PROFESSIONNELLE DES ÉTUDIANTS 6 MOIS APRÈS L’OBTENTION DU DIPLÔME" />
        <FilterDegrees change={this.onChange} />
        {this.displayChart()}
      </SectionStyle>
    );
  }
}

export default Section_7;
