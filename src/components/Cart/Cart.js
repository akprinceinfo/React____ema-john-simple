import React from 'react';

const cart = (props) => {
    const cart = props.cart;
    return (
        <div>
            <h4> Order Summery </h4>
            <p>Iterms Orders : <b>{cart.length}</b></p>

        </div>
    );
};

export default cart;