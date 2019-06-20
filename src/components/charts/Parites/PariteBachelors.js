import React from "react";
import Chart from "../../../styles/PariteStyle";

const PariteChart = ({ height }) => {
  const calculateHeightWomen = () => {
    let result = 100 - parseInt(height);
    return `${result}%`;
  };

  return (
    <Chart>
      <div className="women gender">
        <div>
          <p className="title-parite">{calculateHeightWomen()}</p>
          <p className="value-parite">Femmes</p>
        </div>
      </div>
      <div className="men gender" style={{ height }}>
        <div>
          <p className="title-parite">{height}</p>
          <p className="value-parite">Hommes</p>
        </div>
      </div>
    </Chart>
  );
};

export default PariteChart;
