import React, { Component } from "react";
import Context from "../context";

//components
import Header from "../components/Header";
import Footer from "../components/Footer";
import Body from "../components/Body/body";



class App extends Component {
  state = {};
  render() {
    return (
      <Context.Provider value={{}}>
        <div className="App">
          <Header />
          <Body />
          <Footer />
        </div>
      </Context.Provider>
    );
  }
}

export default App;
