import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import { Home } from "./containers/HomePage/Home";
import { Trends } from "./containers/Trends/Trends";
import { Compare } from "./containers/Compare/Compare";
import { NoMatch } from "./containers/noMatch/noMatch";

// Define links to each Page using BrowserRouter
// For links not defined, it leads to a 404
// All pages are wrapped with a navigation bar and footer

const App = () => {
  return (
    <div>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/trends" component={Trends} />
        <Route exact path="/compare" component={Compare} />
        <Route component={NoMatch} />
      </Switch>
      <div className='footer'>&#169;COVIZ 2020</div>
    </div>
  );
};

export default App;
