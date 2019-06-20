import React, { Component } from 'react';
import styled from "styled-components";

const LegendStyle = styled.div`
    display: inline-block;
    margin: 5px;
    .blockLegend {
        display: inline-block;
        margin-right: 5px;
        width: 24px;
        height: 8px;
    }
    p {
        display: inline-block;
        margin-bottom: 0;
    }
`;
class LegendCharts extends Component {
  render() {
    return (
      <LegendStyle>
        <div className="blockLegend"
            style={ { backgroundColor: `${ this.props.blockColor }` } }></div>
            <p className="textLegend">{this.props.textLegend}</p>
      </LegendStyle>
    )
  }
}


export default LegendCharts;
