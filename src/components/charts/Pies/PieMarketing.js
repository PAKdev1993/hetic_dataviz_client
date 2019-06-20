import React from "react";
import { Pie } from "react-chartjs-2";

function PieChart() {
  const data = {
    datasets: [
      {
        data: [17,23,47,13],
        backgroundColor: ["#18CEAD", "#D54064", "#2D47D2", "#C7CB00"],
        label: "My dataset" // for legend
      }
    ],
    labels: ["CDD", "CDI", "Poursuite d’études", "Autre (Entreprenariat, freelance ...)"],
  };

  return <Pie data={data}
              options={{
                legend:{
                    display: false,
                },
              }}
        />;
}

export default PieChart;
