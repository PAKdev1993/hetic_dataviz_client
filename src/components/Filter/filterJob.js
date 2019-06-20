import React, { Component } from "react";
import "antd/dist/antd.css";
import FilterStyle from "../../styles/FilterStyle";
import { Select } from 'antd';

const { Option } = Select;

class FilterJob extends Component {
  constructor(props) {
    super(props);
    this.state = { 
    }
  }
  render() {
    return(
      <FilterStyle>
        Trier par <Select defaultValue="Métiers" style={{ width: 120 }} onChange={this.props.change}>
          <Option value="Métiers">Métiers</Option>
          <Option value="Développeurs">Développeurs</Option>
          <Option value="Designers">Designers</Option>
          <Option value="Managers">Managers</Option>
        </Select>
      </FilterStyle>
    );
  }
}


export default FilterJob;

