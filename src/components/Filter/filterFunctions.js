import React, { Component } from "react";
import "antd/dist/antd.css";
import FilterStyle from "../../styles/FilterStyle";
import { Select } from 'antd';

const { Option } = Select;

class FilterFunctions extends Component {
  constructor(props) {
    super(props);
    this.state = { 
    }
  }
  render() {
    return(
      <FilterStyle>
        Trier par <Select defaultValue="Catégorie de fonction" style={{ width: 120 }} onChange={this.props.change}>
          <Option value="Catégorie de fonction">Catégorie de fonction</Option>
          <Option value="Indépendant">Indépendant</Option>
          <Option value="Employé">Employé</Option>
          <Option value="Cadre">Cadre</Option>
        </Select>
      </FilterStyle>
    );
  }
}


export default FilterFunctions;

