import React from "react";
import Header from "./Components/Header";
import LoginBody from "./Components/LoginBody";
import DashBoard from "./Components/DashBoard";
import Toolbar from "@material-ui/core/Toolbar";

import "./App.css";

class App extends React.Component {
  state = {
    loggedIn: true,
    online: false
  };

  // AppBar Log Out Handler
  logOutHandler = e => {
    e.preventDefault();
    this.setState({ loggedIn: false });
  };

  // Login Page Login Handler
  logInHandler = e => {
    e.preventDefault();
    this.setState({ loggedIn: true });
  };

  // Dashboard Online Switch Handler
  onlineSwitch = e => {
    this.setState({ online: !this.state.online });
  };

  render() {
    const { loggedIn, online } = this.state;
    return (
      <div>
        <div>
          <Header loggedIn={loggedIn} logOutHandler={this.logOutHandler} />
        </div>
        {loggedIn ? (
          <DashBoard online={online} onlineSwitch={this.onlineSwitch} />
        ) : (
          <LoginBody logInHandler={this.logInHandler} />
        )}
      </div>
    );
  }
}

export default App;
