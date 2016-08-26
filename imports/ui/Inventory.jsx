import React, { Component } from 'react';
import AddFishForm from './AddFishForm.jsx';

var Inventory = React.createClass({
    render : function() {
        return (
            <div>
            <h2>Inventory </h2>
            
                <AddFishForm {...this.props} />
            </div>
        )
    }
});
export default Inventory;