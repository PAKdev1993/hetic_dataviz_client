import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

class BarChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData:{
                labels: ['Bac pro.', 'Bac général & tech.', 'Études supérieurs', 'Sans diplôme', 'Chômage'],
                datasets: [
                    {
                        data: [6, 1, 5, -6, -6],
                        backgroundColor: ['#18CEAD', '#D54064', '#2D47D2', '#C7CB00', '#D2902D']
                    }
                ]
            }
        }
    }

    render() {
        return(
            <div className="BarChart">
                <Bar 
                data={this.state.chartData}
                options={{
                    title:{
                        display: true,
                        text:this.props.date,
                        position: 'bottom'
                    },
                    legend:{
                        display: false,
                    },
                    scales: {
                        yAxes: [{
                            ticks: {
                                display: true,
                                max: 10,
                                min: -10,
                                callback: function(value) {
                                    return value + ' %';
                                }
                            },
                            gridLines: {
                                display: false,
                            }
                        }],
                        xAxes: [{
                            ticks: {
                                display: false,
                            },
                            gridLines: {
                                display: false,
                            }
                        }],
                    },
                    tooltips: { 
                        callbacks: {
                            label: function(tooltipItem, data) {
                                return tooltipItem.yLabel + ' %';
                            },
                        }
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
