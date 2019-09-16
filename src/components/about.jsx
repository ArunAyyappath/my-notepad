import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Navigation from "./navBarCompo";
class DetailViewer extends Component {
  render() {
    return (
      <>
        <Typography component="div" style={{ height: "96vh" }}>
          <Navigation header={true} footer={false} />
          <Container component="main" maxWidth="md">
            <Typography
              variant="h4"
              color="inherit"
              align="center"
              style={{ marginBottom: "48px", marginTop: "48px" }}
            >
              About
            </Typography>
            <Typography
              className={"footer"}
              variant="body2"
              component="p"
              color="inherit"
              style={{ fontSize: "18px" }}
            >
              I'm a Software Engineer by profession, this is my personal blog. I
              write about technology, coding and I like to travel across the
              world. I started my professional career at&#160;
              <a
                href="https://appscook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Appscook Technologies
              </a>
              &nbsp;and switched to&nbsp;
              <br />
              <a
                href="https://quintetsolutions.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Quintet Solutions
              </a>
              . A day dreamer, optimistic.I write here so that I can make notes,
              share, discuss the things I find interesting in life.
            </Typography>
            <Typography
              className={"footer"}
              style={{ marginTop: "15px", fontSize: "18px" }}
              variant="body2"
              color="inherit"
              component="p"
            >
              If you want to say hi, mail me at arunayyappath(@)gmail.com
            </Typography>
          </Container>
        </Typography>
        <Navigation header={false} footer={true} />
      </>
    );
  }
}

export default DetailViewer;
