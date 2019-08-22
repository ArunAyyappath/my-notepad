import React, { Component } from "react";
import Navigation from "./navBarCompo";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import SliderContent from "./cardInnerCompo";
import context from "../media/react.png";
import redux from "../media/redux1.png";
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
              describe={
                "React provide two methods for providing data to the component namely" +
                'PROPS and STATE . Props stand for "properties" is a read only memory' +
                "which cannot be manipulated it is passed from parent component to the" +
                "child component to get updated with the state ..."
              }
            />
            <SliderContent
              head={"Redux Data Handling Work Flow"}
              date={"May 21, 2019"}
              timeNedded={" 20 min read"}
              class={"Redux"}
              img={redux}
              describe={
                "Redux is a state management tool which can be used with any" +
                "javascript framework or libraries. Redux will save the state of the" +
                "application in particular place called stor"
              }
            />
          </Container>
        </Typography>
        <Navigation header={false} footer={true} />
      </React.Fragment>
    );
  }
}

export default BlogContent;
