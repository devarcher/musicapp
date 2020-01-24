import React from "react";
import Header from "./Components/Header";
import LoginBody from "./Components/LoginBody";
import DashBoard from "./Components/DashBoard";

import "./App.css";

class App extends React.Component {
  state = {
    loggedIn: true,
    online: false,
    volume: 70,
    quality: "high"
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
    this.setState({ volume: parseInt(e.target.outerText) });
  };

  // Dashboard Quality Selction
  selectQuality = e => {
    this.setState({ quality: e.target.value })
  }

  render() {
    const { loggedIn, online, volume, quality } = this.state;
    return (
      <div>
        <div>
          <Header loggedIn={loggedIn} logOutHandler={this.logOutHandler} />
        </div>
        {loggedIn ? (
          <DashBoard
            online={online}
            volume={volume}
            quality={quality}
            onlineSwitch={this.onlineSwitch}
            sliderVolume={this.sliderVolume}
            selectQuality={this.selectQuality}
          />
        ) : (
          <LoginBody logInHandler={this.logInHandler} />
        )}
      </div>
    );
  }
}

export default App;
