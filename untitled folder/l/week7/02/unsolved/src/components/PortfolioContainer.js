import React, { Component } from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";

class Portfolio extends Component { 

  render() {
    return (
      <div>
        <NavTabs/>
        <Home />
      </div>
    );
  }
}

export default Portfolio;