import React from "react";
import styled from "styled-components";
import Title from "../../Title/title";
import Legend from "../../LegendCharts/legendCharts";

//chart
import PieBachelors from "../../charts/Pies/PieBachelors";
import PieWeb from "../../charts/Pies/PieWeb";
import PieMarketing from "../../charts/Pies/PieMarketing";

const SectionStyle = styled.section`
  height: 583px;

  .box {
    height: 75%;
  }
  .contentSection {
    display: flex;
    flex-direction: row;
    height: 100%;
    align-items: center;
    div {
      flex: 1;
      padding: 0 10px;
    }
    .titleChart {
      text-align: center;
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      text-transform: uppercase;
    }
    canvas {
      margin: 40px 0;
    }
  }
  .text-pie {
    height: 20%;
    width: 100%;
    padding: 2% 0;
  }
`;

const Section_4 = () => (
  <SectionStyle>
    <Title title="L’insertion professionnelle des étudiants 6 mois après l’obtention du diplôme" />
    <Legend blockColor="#18CEAD" textLegend="CDD" />
    <Legend blockColor="#D54064" textLegend="CDI" />
    <Legend blockColor="#2D47D2" textLegend="Poursuite d’études" />
    <Legend blockColor="#C7CB00" textLegend="Entrepreneuriat" />
    <div className="contentSection">
      <div className="bachelors box">
        <p className="titleChart">Bachelors</p>
        <PieBachelors />
        <div className="text-pie">
          <p>
            En général, 6 mois après avoir obtenu leur diplôme, les étudiants
            des bachelors sont en CDI ou en poursuite d’études. Seulement 1
            étudiant sur 10 est en CDD ou a décidé de devenir entrepreneur.
          </p>
        </div>
      </div>

      <div className="web box">
        <p className="titleChart">Web</p>
        <PieWeb />
        <div className="text-pie">
          <p>
            Concernant le bachelor Web, le constat reste globalement le même.
            Les anciens étudiants ont majoritairement obtenu un CDI ou sont en
            poursuite d’études. Pour les CDD et l’entrepreneuriat, les chiffres
            sont plutôt faibles.
          </p>
        </div>
      </div>

      <div className="webmarketing box">
        <p className="titleChart">Webmarketing</p>
        <PieMarketing />
        <div className="text-pie">
          <p>
            Pour le bachelor Webmarketing, 1 étudiant sur 2 qui ont obtenu leur
            diplôme il y a 6 mois sont en poursuite d’études. Pour le reste, les
            résultats sont plutôt équitables.
          </p>
        </div>
      </div>
    </div>
  </SectionStyle>
);

export default Section_4;
