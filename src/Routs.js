import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import page2 from "./Components/Page2";
import Hostel from "./Components/Hostel";

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={page2} />
                    <Route path="/About" component={Hostel} />
                </Switch>
            </Router>
        )
    }
}