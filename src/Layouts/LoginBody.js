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

const useStyles = makeStyles(theme => ({
  avatar: {
    backgroundColor: theme.palette.secondary.main
  },
  button: {
    width: theme.spacing(3, 0, 2)
  }
}));

const LoginBody = () => {
  const classes = useStyles();
  return (
    <form className="formBox">
      <div className="mainContainer">
        <Grid
          container
          spacing={2}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: "60vh" }}
        >
          <Grid item xs={12}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
          </Grid>
          <Grid item xs={12}>
            <Typography component="h1" variant="h4.25">
              Log In
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="outlined-required"
              label="User Name"
              variant="outlined"
              name="username"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="outlined-required"
              label="Password"
              variant="outlined"
              name="password"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              type="submit"
              color="primary"
              className="subButton"
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </div>
    </form>
  );
};

export default LoginBody;
