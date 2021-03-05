import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Home from '../pages/Home/';
import WeatherDetails from '../pages/WeatherDetails/';

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/weatherdetails" exact component={WeatherDetails} />
            </Switch>
        </Router>
    );
}