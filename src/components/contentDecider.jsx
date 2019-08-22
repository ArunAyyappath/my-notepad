import React, { Component } from "react";
import Navigation from "./navBarCompo";
import "../css/contentdecider.css";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import ProfileAvatar from "./avatarViewCompo";
import img1 from "../media/tools/img1.png";
import img2 from "../media/tools/img2.png";

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
            <Grid container spacing={3}>
              <Grid item md={6}>
                <Typography component="p" className={"Greetings"}>
                  I'm Arun A, welcome to my website. –
                  <a className="Greetings__Link" href="/about">
                    about me
                  </a>
                </Typography>
              </Grid>
              <Grid item md={6}>
                <Typography
                  component="div"
                  align={"right"}
                  className={"Greetings"}
                >
                  <ProfileAvatar />
                </Typography>
              </Grid>
              <Grid item md={12} style={{ width: "100%" }}>
                <h2 className={"GreetingsHead"}>Recent Writings</h2>
              </Grid>
              <Grid item md={12} className={"head"}>
                <span>
                  <a href="/reactContext" className={"secondrylink"}>
                    React data handling & Context Api
                  </a>
                  <span className={"spansecondry"}>
                    &#160; – How context api works
                  </span>
                </span>
              </Grid>
              <Grid item md={12} className={"head"}>
                <span>
                  <a href="/Redux" className={"secondrylink"}>
                    Redux Data Handling Work Flow
                  </a>
                  <span className={"spansecondry"}>
                    &#160; – Initializing setup of Redux step by step
                  </span>
                </span>
              </Grid>
              <Grid item md={12} style={{ width: "100%" }}>
                <h2 className={"GreetingsHead"}>tools for you</h2>
              </Grid>
              <Grid
                item
                md={12}
                className={"head"}
                style={{ background: "#E9F4FB", marginBottom: "50px" }}
              >
                <div style={{ width: "50%", float: "left" }}>
                  <img src={img1} alt={"extension"} style={{ width: "80%" }} />
                </div>
                <ul className={"visual"}>
                  <h2 align={"center"}>Weather App</h2>

                  <li>
                    A simple chrome extension helpful to get up to date with the
                    weather
                  </li>
                  <li>
                    It's now easy to get updated with the weather conditions
                    instantly on your location as well as another location's.
                  </li>
                  <li>
                    Weather app provides detailed weather report & also provides
                    current temperature in Celsius, wind speed, humidity,
                    location coordinates.
                  </li>
                </ul>
                <div>
                  <a
                    className={"chekout"}
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://chrome.google.com/webstore/detail/weather-app/npaebkdojgajejbpgegfgkdgfkokmepi"
                  >
                    Try now
                  </a>
                </div>
              </Grid>

              <Grid
                item
                md={12}
                className={"head"}
                style={{ background: "#E9F4FB" }}
              >
                <div style={{ width: "50%", float: "left" }}>
                  <img src={img2} alt={"extension"} style={{ width: "80%" }} />
                </div>
                <ul className={"visual"}>
                  <h2 align={"center"}>Blog</h2>

                  <li>
                    The blog helps you to discuss the things you find
                    interesting in life
                  </li>
                  <li>You can make notes</li>
                  <li>Share instantly with other's</li>
                </ul>
                <div>
                  <a
                    className={"chekout"}
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://current-blog.web.app/"
                  >
                    Try now
                  </a>
                </div>
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
