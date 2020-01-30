import React from "react";
import Header from "./Components/Header";
import LoginBody from "./Components/LoginBody";
import DashBoard from "./Components/DashBoard";

import "./App.css";

class App extends React.Component {
  state = {
    loggedIn: false,
    online: true,
    volume: 70,
    quality: "high",
    notifications: [],
    showNotifications: false,
    badgeCount: 0
  };

  // Login Page Login Handler
  logInHandler = () => {
    this.setState({ loggedIn: true });
  };

  // AppBar Log Out Handler
  logOutHandler = () => {
    this.setState({ loggedIn: false });
  };

  // AppBar Show / Hide Notifications
  toggleNotifications = () => {
    this.setState(
      { showNotifications: !this.state.showNotifications },
      this.badgeCountReset
    );
  };

  // Badge Count Aggregator
  badgeCountAdd = () => {
    this.setState({ badgeCount: this.state.badgeCount + 1 });
  };

  // Badge Count Reset
  badgeCountReset = () => {
    if (this.state.showNotifications === true) {
      this.setState(prevState => ({
        badgeCount: (prevState.badgeCount = null)
      }));
    }
  };

  // Dashboard Online Switch Handler
  onlineSwitch = () => {
    this.setState({ online: !this.state.online }, this.switchNotification);
  };

  // Adds and removes Offline Notification to Notificaions array in STATE.
  switchNotification = () => {
    const { online, notifications } = this.state;
    const offlineMsg =
      "Your application is offline. You won't be able to share or stream music to other devices.";
    if (online === false) {
      this.setState({ notifications: [...notifications, offlineMsg] });
      this.badgeCountAdd();
    }
    // Keep for future projects
    // else if (online === true) {
    //   this.setState(prevState => ({
    //     notifications: prevState.notifications.filter(
    //       message => message !== offlineMsg
    //     )
    //   }));
    // }
  };

  // Dashboard Volume Slider Volume (Both options use onChangeCommitted to reduce state Change)
  sliderVolume = (e, value) => {
    
    // Slider movement is smooth - but not a controlled component
    this.setState({ volume: parseInt(e.target.outerText) }, this.volumeNotification);

    // Controlled Component, but slider behavior not smooth. UI is sticky and not pleasant.
    //  this.setState({ volume: value }, this.volumeNotification);
  };

  // Adds and removes Volume Notification to Notificaions array in STATE.
  volumeNotification = () => {
    const { volume, notifications } = this.state;
    const volumeMsg =
      "Listening to music at a high volume could cause long-term hearing loss.";
    if (volume > 80) {
      this.setState(
        { notifications: [...notifications, volumeMsg] },
        this.badgeCountAdd
      );
    }
    // Keep for future projects
    // else if (volume <= 80)
    //   this.setState(prevState => ({
    //     notifications: prevState.notifications.filter(
    //       message => message !== volumeMsg
    //     )
    //   }));
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
      this.setState(
        { notifications: [...notifications, qualityMsg] },
        this.badgeCountAdd
      );
    }
    // Keep for future projects
    // else {
    //   this.setState(prevState => ({
    //     notifications: prevState.notifications.filter(
    //       message => message !== qualityMsg
    //     )
    //   }));
    // }
  };

  render() {
    const {
      loggedIn,
      online,
      volume,
      quality,
      notifications,
      showNotifications,
      badgeCount
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
            badgeCount={badgeCount}
          />
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
