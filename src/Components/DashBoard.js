import React from "react";
import Notifications from "./Notifications";

// General
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import "typeface-roboto";

// Cards
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

// Switch
import Switch from "@material-ui/core/Switch";

// Slider
import Slider from "@material-ui/core/Slider";

// Select
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

// Make Custom Color Palette
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

// CSS for classes
const useStyles = makeStyles({
  mainBody: {
    overflow: "hidden"
  },
  cardContainer: {
    height: "",
    ["@media (min-width:900px)"]: {
      height: "70vh"
    },
    padding: "15px"
  },
  cardWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  card: {
    maxWidth: "350px",
    minHeight: "225px",
    "&:hover": {
      boxShadow: "0 7px 7px rgba(0,0,0,0.22)"
    }
  },
  title: {
    borderBottom: "1px solid #80cbc4"
  },
  slider: {
    marginLeft: "20px",
    maxWidth: "85%"
  },
  formControl: {
    marginLeft: "20px",
    width: "85%"
  }
});

const DashBoard = props => {
  const classes = useStyles();
  const {
    online,
    volume,
    quality,
    onlineSwitch,
    sliderVolume,
    selectQuality
  } = props;
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
              xs={10}
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
              xs={10}
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
                      defaultValue={volume}
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
              xs={10}
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
                  <ThemeProvider theme={theme}>
                    <FormControl className={classes.formControl}>
                      <InputLabel id="demo-simple-select-outlined-label">
                        Quality
                      </InputLabel>
                      <Select value={quality} onChange={e => selectQuality(e)}>
                        <MenuItem value="low">Low</MenuItem>
                        <MenuItem value="normal">Normal</MenuItem>
                        <MenuItem value="high">High</MenuItem>
                      </Select>
                    </FormControl>
                  </ThemeProvider>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
          <Notifications online={online} volume={volume} quality={quality} />
        </div>
      </CssBaseline>
    </>
  );
};

export default DashBoard;
