import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
              ></IconButton>
              <MenuIcon />
              <Typography variant="h6">Music App</Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
        </div>
      </div>
    );
  }
}

export default App;
