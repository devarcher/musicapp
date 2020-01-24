import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  aBar: {
    backgroundColor: "#80A690"
  },
  title: {
    flexGrow: 1
  }
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();
  const { loggedIn, logOutHandler } = props;

  return (
    <AppBar position="static" className={classes.aBar}>
      <Toolbar>
        <Typography variant="h5" className={classes.title}>
          Music App
        </Typography>
        {loggedIn && (
          <Button
            variant="outlined"
            color="inherit"
            onClick={e => {
              logOutHandler(e);
            }}
          >
            LOG OUT
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}
