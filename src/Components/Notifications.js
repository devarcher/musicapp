import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import "typeface-roboto";
import zIndex from "@material-ui/core/styles/zIndex";

// Cards
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles({
  absoluteContainer: {
    position: "relative",
    zIndex: "2",
    height: "50vh",
    minWidth: "20vw"
  },
  mainContainer: {
    position: "absolute"
  },
  notifications: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    marginRight: "25px",
    maxWidth: "250px"
  }
});

const Notifications = props => {
  const { notifications } = props;
  const classes = useStyles();
  return (
    <div>
      <CssBaseline />
      <div className={classes.absoluteContiner}>
        <Grid
          container
          display="flex"
          justify="flex-end"
          spacing={2}
          className={classes.mainContainer}
        >
          <Grid item className={classes.notifications}>
            <Card>
              <CardContent>
                <Typography
                  container="h2"
                  xs={10}
                  sm={10}
                  md={6}
                  lg={4}
                  xl={3}
                  variant="subtitle1"
                  padding="20px"
                >
                  {notifications}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Notifications;
