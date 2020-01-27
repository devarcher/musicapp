import React from "react";
import Header from "./Components/Header";
import LoginBody from "./Components/LoginBody";
import DashBoard from "./Components/DashBoard";

import "./App.css";

class App extends React.Component {
  state = {
    loggedIn: true,
    online: true,
    volume: 70,
    quality: "high",
    notifications: [],
    showNotifications: false
  };

  // AppBar Log Out Handler
  logOutHandler = e => {
    e.preventDefault();
    this.setState({ loggedIn: false });
  };

  // AppBar Show / Hide Notifications
  toggleNotifications = e => {
    e.preventDefault();
    this.setState({ showNotifications: !this.state.showNotifications });
  };

  // Login Page Login Handler
  logInHandler = e => {
    e.preventDefault();
    this.setState({ loggedIn: true });
  };

  // Dashboard Online Switch Handler
  onlineSwitch = e => {
    this.setState({ online: !this.state.online }, this.switchNotification);
  };

  // Adds and removes Offline Notification to Notificaions array in STATE.
  switchNotification = () => {
    const { online, notifications } = this.state;
    const offlineMsg =
      "Your application is offline. You won't be able to share or stream music to other devices.";
    if (online === false && !this.state.notifications.includes(offlineMsg)) {
      this.setState({ notifications: [...notifications, offlineMsg] });
    } else if (online === true) {
      this.setState(prevState => ({
        notifications: prevState.notifications.filter(
          message => message !== offlineMsg
        )
      }));
    }
  };

  // Dashboard Volume Slider Volume
  sliderVolume = e => {
    this.setState(
      { volume: parseInt(e.target.outerText) },
      this.volumeNotification
    );
  };

  // Adds and removes Volume Notification to Notificaions array in STATE.
  volumeNotification = () => {
    const { volume, notifications } = this.state;
    const volumeMsg =
      "Listening to music at a high volume could cause long-term hearing loss.";
    if (volume > 80) {
      this.setState({ notifications: [...notifications, volumeMsg] });
    } else {
      this.setState(prevState => ({
        notifications: prevState.notifications.filter(
          message => message !== volumeMsg
        )
      }));
    }
  };

  // Dashboard Quality Selction
  selectQuality = e => {
    this.setState({ quality: e.target.value }, this.qualityNotification);
  };

  // Adds and removes Quality Notification to Notificaions array in STATE.
  qualityNotification = () => {
    const { quality, notifications } = this.state;
    const qualityMsg =
      "Music quality is degraded. Increase quality if your connection allows it.";
    if (quality === "low") {
      this.setState({ notifications: [...notifications, qualityMsg] });
    } else {
      this.setState(prevState => ({
        notifications: prevState.notifications.filter(
          message => message !== qualityMsg
        )
      }));
    }
  };

  render() {
    const {
      loggedIn,
      online,
      volume,
      quality,
      notifications,
      showNotifications
    } = this.state;
    return (
      <div>
        <div>
          <Header
            loggedIn={loggedIn}
            logOutHandler={this.logOutHandler}
            notifications={notifications}
            showNotifications={showNotifications}
            toggleNotifications={this.toggleNotifications}
          />
        </div>
        {loggedIn ? (
          <DashBoard
            online={online}
            volume={volume}
            quality={quality}
            notifications={notifications}
            showNotifications={showNotifications}
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
