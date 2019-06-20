import React from "react";
import styled, { keyframes } from "styled-components";
import "./Gauge.css";
const animate = keyframes`
0%{
          transform: translate(-50%, -75%) rotate(0deg);

}
100%{
          transform: translate(-50%, -75%) rotate(360deg);

}

`;

const Circle = styled.div`
  position: relative;
  height: 200px;
  width: 200px;
  border: 20px solid #fff;
  box-shadow: 0 0 0 10px ${props => props.theme.color2};
  border-radius: 50%;
  overflow: hidden;
  margin: auto;
`;

const Description = styled.h3`
  color: ${props => props.theme.color1};
  margin-top: 10%;
  text-transform: uppercase;
`;

const Wave = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: ${props => props.theme.color1};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  > p {
    position: absolute;
    z-index: 100;
    font-size: 5em;
    color: white;
    text-shadow: 0 5px 10px rgba(55, 124, 78, 0.4);
    margin: 0;
  }

  &::after,
  &::before {
    content: "";
    position: absolute;
    width: 200%;
    height: 200%;
    top: 0;
    left: 50%;
    transform: translate(-50%, -75%);
  }

  &::before {
    border-radius: 45%;
    background: rgba(255, 255, 255, 1);
    animation: ${animate} 5s linear infinite;
  }
  &::after {
    border-radius: 40%;
    background: rgba(255, 255, 255, 0.5);
    animation: ${animate} 10s linear infinite;
  }
`;

function Gauge(props) {
  return (
    <div style={{ width: "250px", height: "250px", textAlign: "center" }}>
      <Circle>
        <Wave className={props.styleClass}>
          <p>{props.percentage}</p>
        </Wave>
      </Circle>
      <Description>{props.descriptionChart}</Description>
    </div>
  );
}

export default Gauge;
