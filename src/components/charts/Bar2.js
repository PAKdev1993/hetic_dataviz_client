import React, { Component } from "react";
import styled from "styled-components";

const BarStyle = styled.div`
    height: 100%;
    .barCharts {
        height: 100%;
        margin: 0 10px;
        border-left: 1px dashed rgba(73, 180, 98, 0.5);
        border-right: 1px dashed rgba(73, 180, 98, 0.5);
        padding: 5px;
        background-color: rgba(55, 124, 78, 0.1);
        position: relative;
        overflow: hidden;
        .bar {
            position: absolute;
            left: 0;
            transform: translateY(-50%);
            width: 100%;
            height: 10px;
            box-shadow: 0px 0px 5px rgba(55, 124, 78, 0.5);
            border-radius: 5px;
            background: #377C4E;
        }
    }
    p {
        text-align: center;
        font-size: 14px;
        line-height: 16px;
        color: #377C4E;
        margin-top: 10px;
    }
`;

class BarChart2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return(
            <BarStyle>
                <div className="barCharts">
                    <div className="bar" 
                    style={ { top: `${ this.props.positionTop }%`, height:`${ this.props.heightBar }%` } }>
                    </div>
                </div>
                <p>{this.props.titleChart}</p>
            </BarStyle>
        )
    }
}

export default BarChart2;
