import React, { Component } from "react";
import ContentDecider from "./contentDecider";
import "../css/default.css";
class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <ContentDecider />
      </React.Fragment>
    );
  }
}

export default Home;
