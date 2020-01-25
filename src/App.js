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
    quality: "high",
    notifications: {
      offline:
        "Your application is offline. You won't be able to share or stream music to other devices.",
      volume:
        "Listening to music at a high volume could cause long-term hearing loss.",
      quality:
        "Music quality is degraded. Increase quality if your connection allows it."
    }
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
    this.setState({ quality: e.target.value });
  };

  render() {
    const { loggedIn, online, volume, quality, notifications } = this.state;
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
            notifications={notifications}
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
