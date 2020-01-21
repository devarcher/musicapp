import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { flexbox } from '@material-ui/system';

const Header = props => {
  return (
    <AppBar position="static">
      <Toolbar display="flex">
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
          <Typography variant="h5" flexGrow={1}>The Hedgehog</Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
