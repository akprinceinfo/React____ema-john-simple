import React from 'react';
import { useState } from 'react';
import fakeData from '../../fakeData/posts';
import Product from '../Product/Product';
import "../Shop/Shop.css";
import "./Shop"

const Shop = () => {

     const first10 = fakeData.slice(0,6);
     const[products, setProuducts]  =  useState(first10);
 
 
     return (
        <div className='shop-container'>
            <div className='product-container'>
        
              {
                 products.map(pd => <Product productName={pd}></Product>)
              }
               
            </div>

            <div className='card-container'>
              <h2> Card Container </h2>
            </div>
            
        </div>
    );
};

export default Shop;