import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
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
    border: "1px solid blue",
    height: "90vh",
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
  },

  cardContainer: {
    display: "flex",
    justifyContent: 'center',
    border: "1px solid red"
  },

  card: {
    maxWidth: "350px",
    minWidth: "200px"
  },

  title: {
    borderBottom: "1px solid #80cbc4"
  }
});

const DashBoard = props => {
  const classes = useStyles();
  const { online, onlineSwitch } = props;
  return (
    <>
      <CssBaseline />
    <div className={classes.mainBody}>
      <Grid container className={classes.cardContainer}>
        <Grid item xs={9} sm={9} md={4}> 
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
                  checked={online}
                  value="online"
                  onClick={e => onlineSwitch(e)}
                ></Switch>
              </ThemeProvider>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={9} sm={9} md={4}>
          <Card className={classes.card}>
            <CardContent>
              <Typography component="h2" variant="h6" className={classes.title}>
                Master Volume
              </Typography>
            </CardContent>

            <CardContent>
              <Typography component="h3" variant="body1">
                Overrides all other sound settings in this application
              </Typography>
            </CardContent>

            <CardActions>
              <ThemeProvider theme={theme}>
                

              </ThemeProvider>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={9} sm={9} md={4}>
          <Card className={classes.card}>
            <CardContent>
              <Typography component="h2" variant="h6" className={classes.title}>
                Sound Quality
              </Typography>
            </CardContent>

            <CardContent>
              <Typography component="h3" variant="body1">
                Manually control the music quality in event of poor connection
              </Typography>
            </CardContent>

            <CardActions>
              <ThemeProvider theme={theme}>
                

              </ThemeProvider>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
    </>
  );
};

export default DashBoard;
