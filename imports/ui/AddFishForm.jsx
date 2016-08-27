import React, { Component,PropTypes } from 'react';
import { Mongo } from 'meteor/mongo';
import { createContainer } from 'meteor/react-meteor-data';
import Fishes from '../api/Fishes.jsx';

import ReactDOM from 'react-dom';

var AddFishForm =React.createClass({ 

    createFish : function (event) {
        //1. Stop the form from submitting
        event.preventDefault();
        //2. Take the data from the form and create an object

        const fish={
            name : this.refs.name.value,
            price : this.refs.price.value,
            status : this.refs.status.value,
            //desc : this.refs.desc.value,
            image : this.refs.image.value
        };
        const name = ReactDOM.findDOMNode(this.refs.name).value.trim();
        const price = ReactDOM.findDOMNode(this.refs.price).value.trim();
        const status = ReactDOM.findDOMNode(this.refs.status).value.trim();
        const image = ReactDOM.findDOMNode(this.refs.image).value.trim();
        Fishes.insert({
            name,
            price,
            status,
            image,
            createdAt: new Date(), // current time
            owner: Meteor.userId          // _id of logged in user
              // username of logged in user
        });
        console.log(fish);
        //3. Add the fish to the App store
        this.props.addFish(fish);

        this.refs.fishForm.reset();
    },
    render :function() {
        return (
            <form className="fish-edit" ref="fishForm" onSubmit ={this.createFish}>
                <input type="text" ref="name" placeholder="Fish Name"/>
                <input type="text" ref="price" placeholder="Fish Price"/>
                <select ref ="status">
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold out!</option>
                </select>
                <input type="text" ref="image" placeholder="URL to Image"/>
                <button type="submit">+Add Item </button>
            </form>
        )
    }


});

AddFishForm.propTypes = {
    fishes: PropTypes.array,
    currentUser: PropTypes.object
};

export default createContainer(() => {
    return {
        fishes: Fishes.find({}).fetch(),
        currentUser: Meteor.user()
    };
}, AddFishForm);

export default AddFishForm;