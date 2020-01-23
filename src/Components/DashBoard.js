import React from "react";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  mainBody: {
    height: "97vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  card: {
    width: "25vw",
    height: "25vh"
  }
});

const DashBoard = () => {
  const classes = useStyles();
  return (
    <div className={classes.mainBody}>
      <Grid 
        container 
        spacing={4}
        justify="center"
        align="center"
        >
        <Grid item xs={12} sm={4} lg={4} xl={3}>
          <Card className={classes.card}>hi</Card>
        </Grid>
        <Grid item xs={12} sm={4} lg={4} xl={3}>
          <Card className={classes.card}>hi</Card>
        </Grid>
        <Grid item xs={12} sm={4} lg={4} xl={3}>
          <Card className={classes.card}>hi</Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default DashBoard;
