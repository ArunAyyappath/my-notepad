import React, { PureComponent } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./homePage";
import DetailViewer from "./about";
import Context from "./reactContext";
import BlogContent from "./blogContent";

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
          <Route exact path="/ReactRedux" component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default Path;
