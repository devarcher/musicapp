import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import "typeface-roboto";

import Slider from "@material-ui/core/Slider";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#5A9986"
    },
    secondary: {
      main: "#5A9986"
    }
  }
});

const useStyles = makeStyles({
  mainBody: {
    overflow: "hidden"
  },
  cardWrapper: {
    height: "45vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  card: {
    maxWidth: "350px",
    minHeight: "225px"
  },
  title: {
    borderBottom: "1px solid #80cbc4"
  },
  slider: {
    marginLeft: "20px",
    maxWidth: "85%",
  },
});

const DashBoard = props => {
  const classes = useStyles();
  const { online, onlineSwitch, sliderVolume} = props;
  return (
    <>
      <CssBaseline>
        <div className={classes.mainBody}>
          <Grid
            container
            spacing={2}
            justify="center"
            className={classes.cardContainer}
          >
            <Grid
              item
              xs={9}
              sm={7}
              md={3}
              l={2}
              xl={2}
              className={classes.cardWrapper}
            >
              <Card className={classes.card}>
                <CardContent>
                  <Typography
                    component="h2"
                    variant="h6"
                    className={classes.title}
                  >
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

            <Grid
              item
              xs={9}
              sm={7}
              md={3}
              l={2}
              xl={2}
              className={classes.cardWrapper}
            >
              <Card className={classes.card}>
                <CardContent>
                  <Typography
                    component="h2"
                    variant="h6"
                    className={classes.title}
                  >
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
                    <Slider
                      className={classes.slider}
                      valueLabelDisplay="auto"
                      step={10}
                      marks
                      min={0}
                      max={100}
                      onChange={e => sliderVolume(e)}
                    />
                  </ThemeProvider>
                </CardActions>
              </Card>
            </Grid>

            <Grid
              item
              xs={9}
              sm={7}
              md={3}
              l={2}
              xl={2}
              className={classes.cardWrapper}
            >
              <Card className={classes.card}>
                <CardContent>
                  <Typography
                    component="h2"
                    variant="h6"
                    className={classes.title}
                  >
                    Sound Quality
                  </Typography>
                </CardContent>

                <CardContent>
                  <Typography component="h3" variant="body1">
                    Manually control the music quality in event of poor
                    connection
                  </Typography>
                </CardContent>

                <CardActions>
                  <ThemeProvider theme={theme}></ThemeProvider>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </div>
      </CssBaseline>
    </>
  );
};

export default DashBoard;
