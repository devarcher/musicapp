import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  mainBody: {
    height: "97vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  cardBox: {
    width: "60vw",
  },
  card: {
    minHeight: "30vh"
  }

});

const DashBoard = () => {
  const classes = useStyles();
  return (
    <div className={classes.mainBody}>
      <div className={classes.cardBox}>
      <Grid container spacing={2} alignItems="center" justify="center">
        <Grid item xs={4}>
          <Card className={classes.card}>hi</Card>
        </Grid>
        <Grid item xs={4}>
          <Card className={classes.card}>hi</Card>
        </Grid>
        <Grid item xs={4}>
          <Card className={classes.card}>hi</Card>
        </Grid>
      </Grid>
      </div>
    </div>
  );
};

export default DashBoard;
