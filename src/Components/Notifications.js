import React from 'react';

class Notifications extends React.Component {
  state = {
    notifications: []
  }

    // Notifications Handler
  notificationHandler = (props) => {
    const { notifications } = this.state;
    const { online, volume, quality } = this.props;
    const messages = {
      offline:
        "Your application is offline. You won't be able to share or stream music to other devices.",
      volume:
        "Listening to music at a high volume could cause long-term hearing loss.",
      quality:
        "Music quality is degraded. Increase quality if your connection allows it."
    };

    console.log(online, volume, quality)
    if (online === false) {
      this.setState(previousState => ({
      notifications: [...previousState.notifications, messages.offline]
  }));
    } 
    
    // if (this.state.volume > 80) {
    //   this.setState({ notifications: messages.volume });
    // } 
    
    // if (quality === "low") {
    //   this.setState({ notifications: messages.quality });
    // }
  };

  render() {
   this.notificationHandler()
    return (
      <div>hi</div>
    )
  }
}

export default Notifications