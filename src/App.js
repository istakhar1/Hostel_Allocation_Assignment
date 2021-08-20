import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Page2 from './Components/Page2'
import Room from './Components/Room'
import './App.css';
import Hostel from './Components/Hostel'
import Hostelg from './Components/Hostelg'
const App =()=> {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/" component={Page2}/>
        <Route exact path="/Hostel" component={Hostel}/>
        <Route exact path="/Hostelg" component={Hostelg}/>
        <Route exact path="/Room" component={Room}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
