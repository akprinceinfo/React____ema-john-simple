import React from 'react';
import "./Product.css"


const Product = (props) => {
    //  console.log(props.productName);


    return (
        <div className='product'>
            <h5> This is Product </h5>
            <h3> {props.productName.title} </h3>
        </div>
    );
};

export default Product;