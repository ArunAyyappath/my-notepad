import React, { Component } from "react";
import Navigation from "./navBarCompo";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import SliderContent from "./cardInnerCompo";
import context from "../media/react.png";
class BlogContent extends Component {
  render() {
    return (
      <React.Fragment>
        <Typography
          component="div"
          style={{ height: "96vh", overflow: "scroll" }}
        >
          <Navigation header={true} footer={false} />
          <Container component="main" maxWidth="md">
            <SliderContent
              head={"React data handling & Context Api"}
              date={"May 17, 2019"}
              timeNedded={" 2 min read"}
              class={"ReactContext"}
              img={context}
            />
            <SliderContent
              head={"React Redux"}
              date={"May 21, 2019"}
              timeNedded={" 10 min read"}
              class={"ReactRedux"}
              img={context}
            />
          </Container>
        </Typography>
        <Navigation header={false} footer={true} />
      </React.Fragment>
    );
  }
}

export default BlogContent;
