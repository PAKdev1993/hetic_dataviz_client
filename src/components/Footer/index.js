import React from "react";
import styled from "styled-components";
import Logo from "../Logo";

const FooterStyle = styled.footer`
  height: 20vh;
  background-color: ${props => props.theme.color3};

  .edito {
    height: 50%;
    text-align: center;
    font-size: 0.9em;
    font-weight: 300;
    color: ${props => props.theme.color1};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Footer = () => (
  <FooterStyle>
    <Logo />
    <div className="edito">
      <p style={{ marginBottom: "0.5%" }}>
        Plateforme réalisée dans le cadre d’un projet à HETIC.
      </p>
      <p>
        Lorick Travailleur, Dimitri Vildina, Pierre-Alexis Krstic, Yash Patel &
        Alexandre Martins
      </p>
    </div>
  </FooterStyle>
);

export default Footer;
