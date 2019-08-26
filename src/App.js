import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import DashboardScreen from "./app/containers/dashboard/DashboardScreen";
import AboutUsScreen from "./app/containers/aboutus/AboutUsScreen";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={DashboardScreen} />
      {/* Below name should be like about-us */}
      <Route exact path='/aboutus' component={AboutUsScreen} /> 
      <Redirect from="**" to="/" />
    </Switch>
  );
}

export default App;
