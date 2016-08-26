import React, { Component } from 'react';
import AddFishForm from './AddFishForm.jsx';

var Inventory = React.createClass({
    render : function() {
        return (
            <div>
            <h2>Inventory </h2>
            
                <AddFishForm {...this.props} />
                <button onClick={this.props.loadSamples}>Load Sample Fishes</button>
            </div>
        )
    }
});
export default Inventory;