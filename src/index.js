import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";

// COMPONENTS
import App from "./Views/App";

//STYLES
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/theme";


const Root = () => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path={process.env.PUBLIC_URL + '/'} component={App} />
        </Switch>
      </Router>
    </>
  </ThemeProvider>
);

ReactDOM.render(<Root />, document.getElementById("root"));
