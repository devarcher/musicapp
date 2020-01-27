import React from "react";
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
      main: "#80cbc4"
    },
    secondary: {
      main: "#DC6866"
    }
  }
});

const useStyles = makeStyles(theme => ({
  aBar: {
    backgroundColor: "#80A690"
  },
  title: {
    flexGrow: 1
  },
  notifications: {
    marginRight: "10px"
  }
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();
  const { loggedIn, logOutHandler, notifications } = props;

  return (
    <AppBar position="static" className={classes.aBar}>
      <Toolbar>
        <Typography variant="h5" className={classes.title}>
          Music App
        </Typography>
        {loggedIn && (
          <>
            <ThemeProvider theme={theme}>
            <IconButton color="inherit" className={classes.notifications}>
              <Badge badgeContent={notifications.length} color="secondary">
                <NotificationsIcon  />
              </Badge>
            </IconButton>


            </ThemeProvider>
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
  );
}
