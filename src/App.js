import React from "react";
import Header from "./Components/Header";
import LoginBody from "./Components/LoginBody";
import DashBoard from "./Components/DashBoard";

import "./App.css";

class App extends React.Component {
  state = {
    loggedIn: true,
    online: true
  };

  logOutHandler = e => {
    e.preventDefault();
    this.setState({ loggedIn: false });
  };

  logInHandler = e => {
    e.preventDefault();
    this.setState({ loggedIn: true });
  };

  render() {
    const { loggedIn } = this.state;
    return (
      <div>
        <Header loggedIn={loggedIn} logOutHandler={this.logOutHandler} />
        {loggedIn ? (
          <DashBoard />
        ) : (
          <LoginBody logInHandler={this.logInHandler} />
        )}
      </div>
    );
  }
}

export default App;
