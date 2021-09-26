import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Checklist from "./pages/checklist";

class App extends Component {
  renderRouter() {
    return (
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/checklist" component={Checklist} />
      </Switch>
    );
  }
  render() {
    return <BrowserRouter>{this.renderRouter()}</BrowserRouter>;
  }
}
export default App;
