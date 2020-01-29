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

// Pop Up
import Menu from "@material-ui/core/Menu";
import Fade from "@material-ui/core/Fade";
import Paper from "@material-ui/core/Paper";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#679488"
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
  },
  notifcationsPopup: {
    marginTop: "15px",
  },
  notificationCard: {
    display: "flex",
    justifyContent: "center",
    background: "mistyrose",
    borderBottom: "1px solid #DC6866"
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

  // Popup Menu - Material UI Boilerplate - For Notications
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = e => {
    setAnchorEl(e.currentTarget);
    toggleNotifications();
  };

  const handleClose = () => {
    setAnchorEl(null);
    toggleNotifications();
  };

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
                  <NotificationsIcon onClick={e => handleClick(e)} />
                </Badge>
                {showNotifications && notifications.length > 0 && (
                  <Menu
                    anchorEl={anchorEl}
                    keepMounted
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Fade}
                    getContentAnchorEl={null}
                    anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                    transformOrigin={{ vertical: "top", horizontal: "center" }}
                    className={classes.notifcationsPopup}
                  >
                    <Card className={classes.notificationCard}>
                      <Typography container="h2" variant="h5">
                        • Notifications •
                      </Typography>
                    </Card>

                    {notifications.map((message, index) => (
                      <Notifications key={index} notifications={message} />
                    ))}
                  </Menu>
                )}
              </IconButton>
              <Button
                variant="outlined"
                color="inherit"
                onClick={logOutHandler}
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
