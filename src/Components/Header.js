import React from "react";
import Notifications from "./Notifications";

// Material UI stuff
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { createMuiTheme } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Badge from "@material-ui/core/Badge";
import { ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#80A690"
    },
    secondary: {
      main: "#DC6866"
    }
  }
});

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1
  },
  notifications: {
    marginRight: "10px"
  }
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();
  const {
    loggedIn,
    logOutHandler,
    notifications,
    showNotifications,
    toggleNotifications
  } = props;

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            Music App
          </Typography>
          {loggedIn && (
            <>
              <IconButton color="inherit" className={classes.notifications}>
                <Badge badgeContent={notifications.length} color="secondary">
                  <NotificationsIcon onClick={e => toggleNotifications(e)} />
                </Badge>
              </IconButton>
              <Button
                variant="outlined"
                color="inherit"
                onClick={e => {
                  logOutHandler(e);
                }}
              >
                LOG OUT
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}
