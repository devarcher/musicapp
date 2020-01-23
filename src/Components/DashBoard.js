import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import "typeface-roboto";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#80cbc4"
    },
    secondary: {
      main: "#7FD9BE"
    }
  }
});

const useStyles = makeStyles({
  mainBody: {
    height: "97vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  card: {
    width: "250px",
    height: "200px"
  },
  title: {
    borderBottom: "1px solid #80cbc4",
  }
});

const DashBoard = () => {
  const classes = useStyles();
  return (
    <div className={classes.mainBody}>
      <Grid container spacing={24} justify="center">
        <Grid item xs={12} sm={4} lg={3} xl={2}>
          <Card className={classes.card}>
            <CardContent>
              <Typography component="h2" variant="h6" className={classes.title}>
                Online Mode
              </Typography>
            </CardContent>
            <CardContent>
              <Typography component="h3" variant="body1">
                Is this application connected to the internet?
              </Typography>
            </CardContent>
            <CardActions>
              <ThemeProvider theme={theme}>
                <Switch
                ></Switch>
              </ThemeProvider>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4} lg={3} xl={2}>
          <Card className={classes.card}>hi</Card>
        </Grid>
        <Grid item xs={12} sm={4} lg={3} xl={2}>
          <Card className={classes.card}>hi</Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default DashBoard;
