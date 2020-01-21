import React from "react";
import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
