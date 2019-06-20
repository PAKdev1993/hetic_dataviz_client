import React, { Component } from "react";
import "antd/dist/antd.css";
import FilterStyle from "../../styles/FilterStyle";
import { Select } from 'antd';

const { Option } = Select;

class FilterYears extends Component {
  constructor(props) {
    super(props);
    this.state = { 
    }
  }
  render() {
    return(
      <FilterStyle>
        Trier par <Select defaultValue="2016" style={{ width: 120 }} onChange={this.props.change}>
          <Option value="2016">2016</Option>
          <Option value="2017">2017</Option>
        </Select>
      </FilterStyle>
    );
  }
}


export default FilterYears;
