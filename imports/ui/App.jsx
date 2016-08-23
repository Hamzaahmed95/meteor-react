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
                        <div className="center">
                        <Header name="hader of store"/>
                            </div>
                    </div>
                    <div className="col-md-4">
                        <div className="center">
                        <Order />
                            </div>
                    </div>
                    <div className="col-md-4">
                        <div className="center">
                            <Inventory />
                            </div>
                    </div>
                </div>
            </div>
        );
    }


}