import React, { Component } from "react";
import "antd/dist/antd.css";
import FilterStyle from "../../styles/FilterStyle";
import { Select } from 'antd';

const { Option } = Select;

class FilterGenders extends Component {
  constructor(props) {
    super(props);
    this.state = { 
    }
  }
  render() {
    return(
      <FilterStyle>
        Trier par <Select defaultValue="Civilité" style={{ width: 120 }} onChange={this.props.change}>
          <Option value="Civilité">Civilité</Option>
          <Option value="Homme">Homme</Option>
          <Option value="Femme">Femme</Option>
        </Select>
      </FilterStyle>
    );
  }
}


export default FilterGenders;

