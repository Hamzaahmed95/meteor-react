import React, { Component } from 'react';
import  History from 'react-router';
import h from './helpers.jsx';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import {createHistory} from 'history'

const history = createHistory();
export default class StorePicker extends Component {


    goToStore(event){
        event.preventDefault();
        console.log("here");
        var storeID = event.target.s.value;
        console.log("now "+ storeID);
        history.push('/signIn/' + storeID);
        //event.target.s.value ='';
    }
    render() {
        return (
            <form className="store-selector" onSubmit={this.goToStore.bind(this)}>
                <h2>Please Enter a Store</h2>
                <input type="text" name="s" defaultValue={h.getFunNames()} required />
                <input type="Submit" />
            </form>

        );
    }


}