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
      <p className={classes.linespacing}>
        React provide two methods for providing data to the component namely
        PROPS and STATE . Props stand for "properties" is a read only memory
        which cannot be manipulated it is passed from parent component to the
        child component to get updated with the state ...
      </p>
    </div>
  );
}
