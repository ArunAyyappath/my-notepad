import React, { Component } from "react";
import Navigation from "./navBarCompo";
import "../css/contentdecider.css";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
class ContentDecider extends Component {
  render() {
    return (
      <React.Fragment>
        <Typography
          component="div"
          style={{ height: "96vh", overflow: "scroll" }}
        >
          <Navigation header={true} footer={false} />
          <Container component="main" maxWidth="md">
            <Grid item md={12}>
              <Grid item md={6}>
                <Typography component="p" className={"Greetings"}>
                  I'm Arun A, welcome to my website. –
                  <a className="Greetings__Link" href="/about">
                    about me
                  </a>
                </Typography>
              </Grid>
              <h2 className={"GreetingsHead"}>Recent Writings</h2>
              <Grid item md={12}>
                <h2>
                  React data handling & Context Api –
                  <a href="/about">How context api works</a>
                </h2>
              </Grid>
            </Grid>
          </Container>
        </Typography>
        <Navigation header={false} footer={true} />
      </React.Fragment>
    );
  }
}

export default ContentDecider;
