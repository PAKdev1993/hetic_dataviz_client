import React from "react";
import Logo from "../Logo";
import Intro from "../Intro";

const Header = () => (
  <header
    style={{
      height: "60vh"
    }}
  >
    <Logo />
    <Intro />
  </header>
);

export default Header;
