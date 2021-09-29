import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./pages/login";
import Dashboard from "./pages/Dashboard";
import ManualAchievement from "./pages/ManualAchievement";
import Achievement from "./pages/Achievement";
import StaffDashboard from "./Staffpage/StaffDashboard";
import StaffAchievement from "./Staffpage/StaffAchievement";



class App extends Component {
  renderRouter() {
    return (
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/ManualAchievement" component={ManualAchievement} />
        <Route exact path="/Achievement" component={Achievement} />
        <Route exact path="/StaffDashboard" component={StaffDashboard} />
        <Route exact path="/StaffAchievement" component={StaffAchievement} />
      </Switch>
    );
  }
  render() {
    return <BrowserRouter>{this.renderRouter()}</BrowserRouter>;
  }
}
export default App;
