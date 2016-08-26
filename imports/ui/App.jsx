import React, { Component } from 'react';

import Header from './Header.jsx';
import Order from './Order.jsx';
import Inventory from './Inventory.jsx';



var App =React.createClass({

    getInitialState : function () {
        return {
            fishes: {},
            order: {}
        }
    },
    addFish: function(fish) {
        var timestamp =(new Date()).getTime();
        //update the state object
        this.state.fishes['fish-' + timestamp]= fish;
        //set the state
        this.setState({fishes : this.state.fishes });
    },
    render : function () {
        return (
            <div className="catch-of-the-day">
                <div className="row">
                    <div className="col-md-4">
                        <div className="center">
                        <Header name="header of store"/>
                            </div>
                    </div>
                    <div className="col-md-4">
                        <div className="center">
                        <Order />
                            </div>
                    </div>
                    <div className="col-md-4">
                        <div className="center">
                            <Inventory addFish={this.addFish}/>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
});
export default App;