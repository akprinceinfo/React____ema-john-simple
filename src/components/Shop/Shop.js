import React from 'react';
import { useState } from 'react';
import fakeData from '../../fakeData/posts';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import "../Shop/Shop.css";
import "./Shop"


const Shop = () => {

     const first6 = fakeData.slice(0,6);
     const[products, setProuducts]  =  useState(first6);
     const [cart, setCart] = useState([]);
 
     const handleAddProduct = (product)=>{
      //  console.log("product",product);
       const newCart = [...cart, product];
       setCart(newCart);
     }
 
     return (
        <div className='shop-container'>
            <div className='product-container'>
        
              {
                 products.map(pd => <Product 
                  handleAddProduct = {handleAddProduct}
                  productNames={pd}
                 ></Product>)
              }
               
            </div>

            <div className='card-container'>
              
             <Cart cart={cart}></Cart>
              
              
            </div>
            
        </div>
    );
};

export default Shop;