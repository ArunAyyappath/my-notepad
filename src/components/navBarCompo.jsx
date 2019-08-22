import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import "../css/navbar.css";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    minHeight: 40,
    backgroundColor: "#fff",
    boxShadow: "none",
    color: "#000"
  },
  globalLink: {
    color: "rgba(0, 0, 0, 0.87)",
    textDecoration: "none",
    fontWeight: 900,
    margin: "0px 0px 0px 30px",
    padding: "5px"
  }
}));

export default function NavigationBar(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.root}>
        <Toolbar variant="dense">
          <Container maxWidth="md">
            {props.header && (
              <>
                <Typography
                  variant="body2"
                  color="inherit"
                  style={{ float: "right" }}
                  align="right"
                >
                  <a className={classes.globalLink} href="/about">
                    About
                  </a>
                </Typography>
                <Typography
                  variant="body2"
                  color="inherit"
                  align="left"
                  style={{ float: "left" }}
                >
                  <a className={classes.globalLink} href="/">
                    Home
                  </a>
                </Typography>
                <Typography variant="body2" color="inherit">
                  <a className={classes.globalLink} href="/writings">
                    Writings
                  </a>
                </Typography>
              </>
            )}
            {props.footer && (
              <>
                <Typography
                  variant="body2"
                  color="inherit"
                  align="right"
                  style={{ float: "right" }}
                >
                  <a
                    className={classes.globalLink}
                    href="https://github.com/ArunAyyappath"
                  >
                    Github
                  </a>
                </Typography>

                <Typography
                  variant="body2"
                  color="inherit"
                  align="right"
                  style={{ float: "right" }}
                >
                  <a
                    className={classes.globalLink}
                    href="https://twitter.com/arunayyappath"
                  >
                    Twitter |
                  </a>
                </Typography>
              </>
            )}
          </Container>
        </Toolbar>
      </AppBar>
    </div>
  );
}
