import React, { Component } from "react";
import styled from "styled-components";
import Title from "../Title/title";

// Filter
import FilterDegrees from "../Filter/filterDregrees";

// Charts
import PariteBachelors from "../charts/Parites/PariteBachelors";

const PariteStyle = styled.div`
  height: 70vh;
  width: 100vw;
  padding: 2% 0;
  box-sizing: border-box;

  .container {
    width: 80%;
    height: 100%;
    margin: 0 auto;
  }
`;

class Parite extends Component {
  state = {
    return: "Bachelors",
    height: "66%"
  };

  onChange = value => {
    console.log(value);
    this.setState(
      {
        return: value
      },
      () => this.changeHeight()
    );
  };

  changeHeight = () => {
    if (this.state.return === "Bachelors") {
      return this.stateHeight(66);
    } else if (this.state.return === "Web") {
      return this.stateHeight(75);
    } else if (this.state.return === "Marketing") {
      return this.stateHeight(49);
    }
  };

  stateHeight = height => {
    this.setState({ height: `${height}%` });
  };

  render() {
    return (
      <PariteStyle>
        <div className="container">
          <Title title="La parité entre les étudiants" />
          <FilterDegrees change={this.onChange} />
          <PariteBachelors height={this.state.height} />
          <p style={{ marginTop: "2%" }}>
            La parité entre les étudiants est très importante à nos yeux, c’est
            pourquoi depuis quelques années c’est un sujet qui est au centre des
            priorités. On peut voir que globalement le nombre d’étudiants de
            genre masculin est plus fort, cependant au sein du bachelor
            Webmarketing la parité est presque parfaite !
          </p>
        </div>
      </PariteStyle>
    );
  }
}

export default Parite;
