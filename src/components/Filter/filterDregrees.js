import React, { Component } from "react";
import "antd/dist/antd.css";
import FilterStyle from "../../styles/FilterStyle";
import { Select } from 'antd';

const { Option } = Select;

class FilterDegrees extends Component {
  constructor(props) {
    super(props);
    this.state = { 
    }
  }
  render() {
    return(
      <FilterStyle>
        Trier par <Select defaultValue="Bachelors" style={{ width: 120 }} onChange={this.props.change}>
          <Option value="Bachelors">Bachelors</Option>
          <Option value="Web">Web</Option>
          <Option value="Marketing">Marketing</Option>
        </Select>
      </FilterStyle>
    );
  }
}


export default FilterDegrees;
