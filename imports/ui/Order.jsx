import React, { Component } from 'react';
import h from './helpers.jsx';

var Order = React.createClass ({
    renderOrder :function (key) {
        var fish = this.props.fishes[key];
        var count =this.props.order[key];

        if(!fish){
            return <li key={key}>Sorry, fish no longer available!</li>
        }
        return(
            <li>
                {count}lbs
                {fish.name}
                <span className="price">{h.formatPrice(count * fish.price)}</span>
            </li>
        )
    },
    render : function () {

        var orderIds = Object.keys(this.props.order);

        var total = orderIds.reduce((prevTotal, key)=>{
           var fish = this.props.fishes[key];
            var count = this.props.order[key];
            var isAvailable = fish && fish.status ==='available';

            if(fish && isAvailable){
                return prevTotal + (count * parseInt(fish.price)|| 0 )
            }

            return prevTotal;
        } ,0);


        return (
            <div className="order-wrap">
                <h2 className="order-title">Your Order </h2>
                <ul className="order">
                    {orderIds.map(this.renderOrder)}
                    <li className="total">
                        <strong>Total:</strong>
                        {h.formatPrice(total)}
                    </li>
                </ul>



            </div>
       )
    }


});
export default Order;
