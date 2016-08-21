import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <h2 className="name">{this.props.name}</h2>
        );
    }


}