import React, { Component } from 'react';

export default class StorePicker extends Component {
    render() {
        return (
            <form className="center">
                <h2>Please Enter a Store</h2>
                <input type="text" ref="storeId" required />
                <button type="Submit" class="btn btn-primary">Submit</button>
            </form>
        );
    }


}