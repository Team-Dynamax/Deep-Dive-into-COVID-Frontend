import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import { Home } from './containers/HomePage/Home';
import { Trends } from './containers/Trends/Trends';
import {Product} from './containers/Product/Product';
import { Compare } from './containers/Compare/Compare';
import { Predict } from './containers/Predict/Predict';
import { noMatch } from './containers/noMatch/noMatch';         // 404 Page

// TASKS
// 1. Add at least 1 fallback font


const App = () => {
  return (
    <div>     
      
      <Navigation />
        <Switch>
          <Route exact path = "/" component={Home} />
          <Route exact path = "/trends" component={Trends} />
          <Route exact path = "/compare" component={Compare} />
          <Route exact path = "/predict" component={Predict} />
          <Route exact path = "/about" component={Product} />
          <Route component = {noMatch} />
        </Switch>
      <Footer/>
 
    </div>
   
  )

}

export default App;
