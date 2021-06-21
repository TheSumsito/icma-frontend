import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

//* Views
import Login from './views/Login.jsx';
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' component={Login} />
        </Switch>
      </Router>
    )
  }
}

export default App;