import React, { Component } from 'react';

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
        console.log(fish);
        //3. Add the fish to the App store
        this.props.addFish(fish);
        this.refs.fishForm.reset();
    },
    render :function() {
        return (
            <form className="fish-edit" ref="fisForm" onSubmit ={this.createFish}>
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
export default AddFishForm