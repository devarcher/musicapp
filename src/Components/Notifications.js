import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import "typeface-roboto";

// Cards
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles({
  notifications: {
    maxWidth: "450px"
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
            <Card padding="20px">
              <CardContent>
                <Typography
                  container="h2"
                  xs={10}
                  sm={10}
                  md={6}
                  lg={1}
                  xl={1}
                  variant="subtitle1"
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
