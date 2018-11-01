import React, { Component } from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import From from './component/From'
class App extends Component {
  render() {
    if (window.location.hash === '#/') {
      return <Redirect to="/home" />;
    }
    return (
      <div className="App">
        <Switch>
          <Route path="/home/:id" component={Home} />
          <Route path="/about/:id" component={About} />
          <Route path="/about" component={About} />
          <Route path="/home" component={Home} />
          <Route path="/from" component={From} />
        </Switch>
      </div>
    );
  }
}

export default App;
