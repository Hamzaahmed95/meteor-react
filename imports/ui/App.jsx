import React, { Component } from 'react';

import Header from './Header.jsx';
import Order from './Order.jsx';
import Inventory from './Inventory.jsx';

export default class App extends Component {
    render() {
        return (
            <div className="catch-of-the-day">
                <div className="row">
                    <div className="col-md-4">
                        <Header name="header of store"/>
                    </div>
                    <div className="col-md-4">
                        <Order />
                    </div>
                    <div className="col-md-4">
                        <Inventory />
                    </div>
                </div>
            </div>
        );
    }


}