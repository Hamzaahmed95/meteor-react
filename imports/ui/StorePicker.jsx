import React, { Component } from 'react';
import  History from 'react-router';
import h from './helpers.jsx';
import  { Fishes }  from '../api/Fishes.jsx';

import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import {createHistory} from 'history'

const history = createHistory();
var StorePicker =React.createClass({

    mixins : [History],
    goToStore(event){
        event.preventDefault();
        console.log("here");
        var storeID = event.target.s.value;
        console.log("now "+ storeID);
        history.push('/signIn/' + storeID);
        //event.target.s.value ='';
    },
    render : function () {
        
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2>Please Enter a Store</h2>
                <input type="text" name="s" defaultValue={h.getFunNames()}  />
                <input type="Submit" />
            </form>

        )
    }

});
export default StorePicker;