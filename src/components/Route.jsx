import React, { PureComponent } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./homePage";
import DetailViewer from "./about";
import Context from "./reactContext";
import BlogContent from "./blogContent";
import Redux from "./reactRedux";

class Path extends PureComponent {
  componentDidMount() {
    document.title = "Arun Ayyappath Blog";
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/writings" component={BlogContent} />
          <Route exact path="/about" component={DetailViewer} />
          <Route exact path="/ReactContext" component={Context} />
          <Route exact path="/Redux" component={Redux} />
        </Switch>
      </Router>
    );
  }
}

export default Path;
