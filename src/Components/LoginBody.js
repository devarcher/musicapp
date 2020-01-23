import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { palette } from "@material-ui/system";

import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#80cbc4"
    },
    secondary: {
      main: "#BF7D65"
    }
  }
});

const useStyles = makeStyles({
  mainBody: {
    height: "97vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },

  avatar: {
    backgroundColor: "#BF7D65"
  },

  inputField: {
    width: "300px"
  },

  subButton: {
    backgroundColor: "#BF7D65",
    width: "300px",
    "&:hover": {
      background: "#80A690",
      transition: ".4s"
    }
  }
});

const LoginBody = props => {
  const { logInHandler } = props;
  const classes = useStyles();
  return (
    <div className={classes.mainBody}>
      <form className="formBox" onSubmit={e => logInHandler(e)}>
        <div>
          <Grid
            container
            spacing={2}
            direction="column"
            alignItems="center"
            justify="center"
          >
            <Grid item xs={12}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
            </Grid>
            <Grid item xs={12}>
              <Typography component="h1" variant="h4">
                Log In
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <ThemeProvider theme={theme}>
                <TextField
                  variant="outlined"
                  label="User Name"
                  name="username"
                  className={classes.inputField}
                />
              </ThemeProvider>
            </Grid>
            <Grid item xs={12}>
              <ThemeProvider theme={theme}>
                <TextField
                  variant="outlined"
                  label="Password"
                  name="password"
                  className={classes.inputField}
                />
              </ThemeProvider>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                type="submit"
                color="primary"
                className={classes.subButton}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </div>
      </form>
    </div>
  );
};

export default LoginBody;
