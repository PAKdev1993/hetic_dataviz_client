import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";

class BarChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData:{
                labels: ["Designers", "Développeurs", "Management", "Recherche d’emploi", "Poursuite d’études"],
                datasets: [
                  {
                    backgroundColor: ["#18CEAD", "#C7CB00","#2D47D2","#D2902D","#D54064"],
                    data: [18,46,23,8,5]
                  }
                ]
              }
        }
    }

    render() {
        return(
            <div className="DoughnutChart">
                <Doughnut 
                data={this.state.chartData}
                options={{
                    title: {
                      display: false,
                    },
                    legend: {
                        display: false,
                    },
                    cutoutPercentage: 20,
                    animation: {
                    },
                    responsive: true,
                    maintainAspectRatio: false,
                  }}
                />
            </div>
        )
    }
}

export default BarChart;
