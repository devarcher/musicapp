import React from "react";
import Header from "./Components/Header";
import LoginBody from "./Components/LoginBody";
import DashBoard from "./Components/DashBoard";

import "./App.css";

class App extends React.Component {
  state = {
    loggedIn: true,
    online: false,
    volume: undefined
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

  // Dashboard Volume Slider Volume
  sliderVolume = e => {
    if (parseInt(e.target.outerText) > 80) {
      console.log("too loud");
    }
    this.setState({ volume: parseInt(e.target.outerText) });
  };

  render() {
    const { loggedIn, online, volume } = this.state;
    console.log(volume, online);
    return (
      <div>
        <div>
          <Header loggedIn={loggedIn} logOutHandler={this.logOutHandler} />
        </div>
        {loggedIn ? (
          <DashBoard
            online={online}
            onlineSwitch={this.onlineSwitch}
            sliderVolume={this.sliderVolume}
          />
        ) : (
          <LoginBody logInHandler={this.logInHandler} />
        )}
      </div>
    );
  }
}

export default App;
