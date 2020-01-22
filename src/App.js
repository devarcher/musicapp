import React from "react";
import Header from "./Layouts/Header";
import LoginBody from "./Layouts/LoginBody";
import DashBoard from "./Layouts/DashBoard";
import Footer from "./Layouts/Footer";

import "./App.css";

class App extends React.Component {
  state = {
    loggedIn: false
  };

  render() {
    const { loggedIn } = this.state;
    return (
      <div>
        <Header loggedIn={loggedIn} />
        <div>{loggedIn ? <DashBoard /> : <LoginBody />}</div>
        <Footer />
      </div>
    );
  }
}

export default App;
