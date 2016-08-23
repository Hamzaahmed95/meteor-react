import { Router, Route, browserHistory } from 'react-router';
//import {createBrowserHistory} from 'history/lib/createBrowserHistory';

import React, { Component } from 'react';

import App from './App.jsx'
import StorePicker from './StorePicker.jsx'

export default class ReactRoutes extends Component {
    render() {
        return (
        <Router history={browserHistory}>
            <Route path="/" component={App} />
            <Route path="/signIn" component={StorePicker}/>
        </Router>
        )
    }
};