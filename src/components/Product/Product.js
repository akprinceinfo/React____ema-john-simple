// import React, { useEffect, useState } from 'react';
import "./Product.css"


const Product = (props) => {
    console.log(props.productName);
    // (title and id => api are name thaka call kora hoica )
    const { title,id } = props.productName;
      return (
        <div className='product'>
            <div>
                <img src='{props.productName.image}' alt='img'></img>
            </div>
            <div>
                 <h3> {title} </h3>
                
                <p><small>Id by : {id} </small></p>
                <button>Add TO Card</button>
                <br></br>
                <br></br>
            </div>
            {/* <h3> {props.productName.title} </h3> */}
        </div>
    );
};

export default Product;