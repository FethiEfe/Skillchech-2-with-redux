import React, { Component } from 'react';
import Header from "./component/Header";
import {HashRouter as Router} from "react-router-dom"
import routes from "./routes"


class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        {routes}
      </Router>
    
    );
  }
}

export default App;
