import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import "typeface-roboto";

const useStyles = makeStyles({
  notificationTitle: {
    borderBottom: "1px solid #5A9986"
  }
});

const Notifications = props => {
  const { online, volume, quality, notifications } = props;
  const classes = useStyles();
  return (
    <div className={classes.mainContainer}>
      <CssBaseline />
      <Grid
        container
        display="flex"
        direction="column"
        alignItems="center"
        justify="center"
        spacing={2}
        className={classes.notifications}
      >
        <Grid item xs={10} sm={7} md={9} lg={6} xl={6}>
          <Typography
            component="h1"
            variant="h4"
            className={classes.notificationTitle}
          >
            Notifications
          </Typography>
        </Grid>
        {online === false && (
          <Grid
            item
            xs={8}
            sm={5}
            md={6}
            lg={4}
            xl={6}
            className={classes.notificationsWrapper}
          >
            <Typography component="h2" variant="h6">
              {notifications.offline}
            </Typography>
          </Grid>
        )}
        {volume > 80 && (
          <Grid
            item
            xs={8}
            sm={5}
            md={6}
            lg={4}
            xl={6}
            className={classes.notificationsWrapper}
          >
            <Typography component="h2" variant="h6">
              {notifications.volume}
            </Typography>
          </Grid>
        )}
        {quality === "low" && (
          <Grid
            item
            xs={8}
            sm={5}
            md={6}
            lg={4}
            xl={6}
            className={classes.notificationsWrapper}
          >
            <Typography component="h2" variant="h6">
              {notifications.quality}
            </Typography>
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default Notifications;
