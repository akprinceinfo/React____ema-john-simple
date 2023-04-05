// import React, { useEffect, useState } from 'react';
import "./Product.css"


const Product = (props) => {
    // console.log(props.productName);
    // (title and id => api are name thaka call kora hoica )
    const { title,id } = props.productNames;
      return (
        <div className='product'>
            <div>
                <img src='{props.productNames.image}' alt='img'></img>
            </div>
            <div>
                 <h3> {title} </h3>
                
                <p><small>Id by : {id} </small></p>
                 <br></br>
                <button onClick={()=>{props.handleAddProduct(props.productNames)}}>Add TO Card</button>
                <br></br>
                <br></br>
            </div>
            {/* <h3> {props.productName.title} </h3> */}
        </div>
    );
};

export default Product;