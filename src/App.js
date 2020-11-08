import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import {Home} from './containers/HomePage/Home';
import {Trends} from './containers/Trends/Trends';
import {noMatch} from './containers/noMatch/noMatch';         // 404 Page

// TASKS
// 1. Add at least 1 fallback font
// 2. Insert other links


const App = () => {
  return (
    <div>     
      
      <Navigation />
        <Switch>
          <Route exact path = "/Deep-Dive-into-COVID-Frontend" component={Home} />
          <Route exact path = "/Deep-Dive-into-COVID-Frontend/trends" component={Trends} />
          <Route component = {noMatch} />
        </Switch>
      <Footer/>
 
    </div>
   
  )

}

export default App;
