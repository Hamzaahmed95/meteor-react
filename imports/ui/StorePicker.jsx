import React, { Component } from 'react';

import h from './helpers.jsx';

export default class StorePicker extends Component {
    render() {
        return (
            <form className="center">
                <h2>Please Enter a Store</h2>
                <input type="text" ref="storeId" defaultValue={h.getFunNames()} required />
                <input type="Submit" />
            </form>
        );
    }


}