import React, { Component } from "react";
import styled from "styled-components";
import Title from "../../Title/title";
import Legend from "../../LegendCharts/legendCharts";

// Filter
import FilterGenders from "../../Filter/filterGenders";

//Charts
import Doughnut from "../../charts/Doughnuts/Doughnut";
import DoughnutMan from "../../charts/Doughnuts/DoughnutMan";
import DoughnutWomen from "../../charts/Doughnuts/DoughnutWomen";

const SectionStyle = styled.section`
  height: 678px;
  .DoughnutChart {
    height: 70%;
    margin: 10px 0;
  }
  .textSection {
    display: flex;
    flex-direction: row;
    p {
      flex: 1;
      padding: 0 10px;
    }
  }
`;

class Section_5 extends Component {
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
      return <Doughnut />;
    } else if (this.state.return === "Homme") {
      return <DoughnutMan />;
    } else if (this.state.return === "Femme") {
      return <DoughnutWomen />;
    }
  };

  render() {
    return (
      <SectionStyle>
        <Title title="LE BACHELOR WEB FORME DES PROFILS VARIÉS" />
        <FilterGenders change={this.onChange} />
        <Legend blockColor="#18CEAD" textLegend="Designers" />
        <Legend blockColor="#C7CB00" textLegend="Développeurs" />
        <Legend blockColor="#2D47D2" textLegend="Management" />
        <Legend blockColor="#D2902D" textLegend="Recherche d’emploi" />
        <Legend blockColor="#D54064" textLegend="Poursuite d’études" />
        {this.changeReturn()}
        <div className="textSection">
          <p>
            Le bachelor Web offre de nombreuses possibilités aux étudiants, nous
            pouvons le voir avec ce graphe qui décrit efficacement la pluralité
            de compétences que l’on y développer.
          </p>
          <p>
            Avec une majorité d’heures de cours de développement, il est logique
            que le métier qui sort en tête soit celui de développeur. Ensuite,
            on peut voir que de nombreux designers sortent de cette promotion.
            Il est également possible d’évoluer rapidement en tant que manager
            ou de poursuivre ses études en mastère.
          </p>
        </div>
      </SectionStyle>
    );
  }
}

export default Section_5;
