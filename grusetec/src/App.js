import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './components/general/Login';

function App() {
  return (
    <Router>
    <>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </>
  </Router>
  );
}

export default App;
