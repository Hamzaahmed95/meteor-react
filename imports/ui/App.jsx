import React, { Component } from 'react';

import Header from './Header.jsx';
import Order from './Order.jsx';
import Inventory from './Inventory.jsx';
import Fish from './Fish.jsx';


var App =React.createClass({

    getInitialState : function () {
        return {
            fishes: {},
            order: {}
        }
    },
    addtoOrder : function (key) {
        this.state.order[key] = this.state.order [key] + 1 || 1;
        this.setState({ order : this.state.order});
    },
    addFish: function(fish) {
        var timestamp =(new Date()).getTime();
        //update the state object
        this.state.fishes['fish-' + timestamp]= fish;
        //set the state
        this.setState({fishes : this.state.fishes });
    },
    
    loadSamples :function () {
        this.setState({
            fishes : require('./sample-fishes')
        });
    },
    renderFish: function (key) {
        return <Fish key={key} index={key} details={this.state.fishes[key]}
        addToOrder ={this.addtoOrder}/>
        
    },
    
    render : function () {
        return (
            <div className="catch-of-the-day">
                <div className="row">
                    <div className="col-md-4">
                        <div className="center">
                        <Header name="header of store"/>
                        <ul className="list-of-fishes">
                            {Object.keys(this.state.fishes).map(this.renderFish)}
                        </ul>

                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="center">
                        <Order  fishes ={this.state.fishes} order ={this.state.order}/>
                            </div>
                    </div>
                    <div className="col-md-4">
                        <div className="center">
                            <Inventory addFish={this.addFish} loadSamples={this.loadSamples}/>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
});
export default App;