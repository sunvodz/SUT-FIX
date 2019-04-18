import React, { Component } from 'react';
import './App.css';
import Head from './head/Head';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
        <Route path='/' exact={true} component={Head}/>
        </Switch>
        </Router>
      
    );
  }
}

export default App;
