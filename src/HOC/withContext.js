import React from "react";
import Context from "./context";

const withContext = Component => {
  return () => (
    <Context.Consumer>
      {context => <Component context={context} />}
    </Context.Consumer>
  );
};

export default withContext;
