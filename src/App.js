import React, { Component } from 'react';
import Home from './Home';
import Checkout from './Checkout'
import { BrowserRouter, Switch, Route } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/checkout' component={Checkout}/>
       </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
