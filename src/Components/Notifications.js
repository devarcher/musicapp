import React from "react";

class Notifications extends React.Component {
  state = {
    notifications: {
      offline:
        "Your application is offline. You won't be able to share or stream music to other devices.",
      volume:
        "Listening to music at a high volume could cause long-term hearing loss.",
      quality:
        "Music quality is degraded. Increase quality if your connection allows it."
    }
  };

  // Notifications Handler
  notificationHandler = props => {
    const { notifications } = this.state;
    const { online, volume, quality } = this.props;

    if (online === false) {
      console.log(notifications.offline);
    }

    if (volume > 80) {
      console.log(notifications.volume);
    }

    if (quality === "low") {
      console.log(notifications.quality);
    }
  };

  render() {
    this.notificationHandler();
    return <div>hi</div>;
  }
}

export default Notifications;
