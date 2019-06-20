import React from "react";
import styled from "styled-components";

const LogoStyle = styled.div`
  height: 10vh;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.color1};

  > p:first-child {
    font-size: 1.6em;
    margin-top: 5%;
    margin-bottom: 0;
    letter-spacing: 0.2em;

    > span {
      opacity: 0.6;
    }
  }

  > p:last-child {
    font-size: 1.6em;
    letter-spacing: 0.5em;
    text-transform: uppercase;
    font-weight: 300;
    margin-bottom: 5%;
  }
`;

const Logo = () => (
  <LogoStyle>
    <p>
      bachelors
      <span>.data</span>
    </p>
    <p>Hetic</p>
  </LogoStyle>
);

export default Logo;
