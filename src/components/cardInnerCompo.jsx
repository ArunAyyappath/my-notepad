import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Composition from "./compositionCompo";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles({
  card: {
    maxWidth: "auto",
    margin: 20
  },
  media: {
    height: 180
  },
  spacing: {
    lineHeight: 1.6,
    margin: "0px 0px 2em"
  }
});

function handleClick(event) {
  let Target = event.currentTarget.getAttribute("class").split(" ");
  let length = Target.length;
  window.location.href = `/${Target[length - 1]}`;
}

export default function SliderContent(props) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea className={props.class} onClick={handleClick}>
        <CardMedia
          component="img"
          alt={props.head}
          height="265"
          style={{ filter: "invert(1)" }}
          image={props.img}
          title={props.head}
        />
        <CardContent className={classes.media}>
          <Typography gutterBottom variant="h5" component="h2" align={"left"}>
            {props.head}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.date}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.timeNedded}
          </Typography>
          <Typography
            className={classes.spacing}
            variant="body2"
            color="textPrimary"
            component="div"
          >
            <Composition />
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
