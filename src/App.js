import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import DashboardScreen from "./containers/dashboard/DashboardScreen";
import AboutUsScreen from "./containers/aboutus/AboutUsScreen";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={DashboardScreen} />
      <Route exact path='/aboutus' component={AboutUsScreen} />
      <Redirect from="**" to="/" />
    </Switch>
  );
}

export default App;
