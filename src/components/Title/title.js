import React, { Component } from 'react';
import styled from "styled-components";

const TitleStyle = styled.div`
  h5 {
    width: 100%;
    border-bottom: solid 1px black;
    padding: 10px 0;
    font-size: 1.2em;
    letter-spacing: 0.1em;
    font-weight: 300;
    text-transform: uppercase;
  }
`;
class Title extends Component {
  render() {
    return (
      <TitleStyle>
        <h5>{this.props.title}</h5>
      </TitleStyle>
    )
  }
}


export default Title;
