import React from "react";
import Section1 from "./Sections/section_1";
import Section2 from "./Sections/section_2";
import Section4 from "./Sections/section_4";
import Section5 from "./Sections/section_5";
import Section6 from "./Sections/section_6";
import Section7 from "./Sections/section_7";
import Parite from "../Parite";

const Body = () => (
  <main>
    {/* Ajout de toutes les sections (7) */}
    <Section1 />
    <Section2 />
    <Parite />
    <Section4 />
    <Section5 />
    <Section6 />
    <Section7 />
  </main>
);

export default Body;
