import React, { Component } from "react";
import styled from "styled-components";
import Title from "../../Title/title";

// Filter
import FilterGenders from "../../Filter/filterGenders";

//charts
import BarChart2 from "../../charts/Bar2";

const SectionStyle = styled.section`
  height: 720px;
  .contentSection {
    display: flex;
    flex-direction: row;
    height: 90%;
    margin: 10px 0;
    align-items: center;
    .charts {
      flex: 1;
      display: flex;
      height: 75%;
      flex-direction: row;
      align-items: center;
      > div {
        flex: 1;
      }
      .graduation {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        height: 100%;
        p {
          border-bottom: 1px solid #f8db3d;
        }
      }
    }
    .textSection {
      flex: 1;
    }
  }
`;
class Section_2 extends Component {
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
      return (
        <div className="charts">
          <div className="graduation">
            <p>36 000€ à 40 000€</p>
            <p>30 000€ à 36 000€</p>
            <p>26 000€ à 30 000€</p>
            <p>20 000€ à 26 000€</p>
            <p>16 000€ à 20 000€</p>
          </div>
          <BarChart2 positionTop="36" heightBar="72" titleChart="Développeurs" />
          <BarChart2 positionTop="59" heightBar="70" titleChart="Designers" />
          <BarChart2 positionTop="23" heightBar="75" titleChart="Managers" />
        </div>
      );
    } else if (this.state.return === "Homme") {
      return (
        <div className="charts">
          <div className="graduation">
            <p>36 000€ à 40 000€</p>
            <p>30 000€ à 36 000€</p>
            <p>26 000€ à 30 000€</p>
            <p>20 000€ à 26 000€</p>
            <p>16 000€ à 20 000€</p>
          </div>
          <BarChart2
            positionTop="27"
            heightBar="97"
            titleChart="Développeurs"
          />
          <BarChart2 positionTop="60" heightBar="60" titleChart="Designers" />
          <BarChart2 positionTop="15" heightBar="97" titleChart="Managers" />
        </div>
      );
    } else if (this.state.return === "Femme") {
      return (
        <div className="charts">
          <div className="graduation">
            <p>36 000€ à 40 000€</p>
            <p>30 000€ à 36 000€</p>
            <p>26 000€ à 30 000€</p>
            <p>20 000€ à 26 000€</p>
            <p>16 000€ à 20 000€</p>
          </div>
          <BarChart2
            positionTop="38"
            heightBar="68"
            titleChart="Développeurs"
          />
          <BarChart2 positionTop="62" heightBar="70" titleChart="Designers" />
          <BarChart2 positionTop="27" heightBar="75" titleChart="Managers" />
        </div>
      );
    }
  };

  render() {
    return (
      <SectionStyle>
        <Title title="LE SALAIRE DES ÉTUDIANTS EN BACHELOR WEB" />
        <FilterGenders change={this.onChange} />
        <div className="contentSection">
          {this.changeReturn()}
          <p className="textSection">
            Concernant les fourchettes de salaire, globalement les managers
            restent plus payés que les développeurs/designers, ce qui est
            logique (le terme “managers” représente les Lead dév/design par
            exemple). Il est également intéressant de consulter les différences
            de salaires selon la civilité de l’étudiant
          </p>
        </div>
      </SectionStyle>
    );
  }
}

export default Section_2;
