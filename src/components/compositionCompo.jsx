import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  linespacing: {
    lineHeight: 1.6,
    margin: "0px 0px 2em"
  },
  outer: {
    padding: "15px"
  }
});

export default function Composition(props) {
  const classes = useStyles();
  return (
    <div className={classes.outer}>
      <p className={classes.linespacing}>{props.description}</p>
    </div>
  );
}
