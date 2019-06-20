import React from "react";
import { Polar } from "react-chartjs-2";

function PolarChart() {
  const data = {
    datasets: [
      {
        data: [50,40,10],
        backgroundColor: ["#74E2CE", "#E4BC81", "#8191E4"],
        label: "My dataset" // for legend
      }
    ],
    labels: ["Marketing & Communication", "Poursuite d’étude", "Recherche d’emploi"],
  };
  return <Polar data={data} 
                options={{
                  legend:{
                      display: false,
                  },
                  scale: {
                    ticks: {
                      max: 100,
                      min: -100,
                    }
                  },
                  responsive: true,
                  maintainAspectRatio: false,
              }}/>;
}

export default PolarChart;
