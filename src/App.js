import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

//* Views
import Login from './views/Login/Login.jsx';
class App extends Component {
  render() {
    return (
      <div className="container">
        <Router>
          <Switch>
            <Route path='/' component={Login} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;