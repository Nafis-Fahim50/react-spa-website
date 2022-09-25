import { click } from '@testing-library/user-event/dist/click';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data =>setProducts(data))
    },
    [])
    
    const HandlerAddToCart = (product)=>{
        console.log(product);
        const newCart = [...cart,product];
        setCart(newCart);
    }

    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product=><Product
                    key = {product.id}
                    handlerAddToCart = {HandlerAddToCart}
                    product = {product}
                    ></Product>)
                }

            </div>
            <div className='cart-container'>
                <h3 className='order'> Order Summary</h3>
                <br />
                <div className='check-out'>
                    <p>Selected Items: {cart.length} </p>
                    <p>Total Price: $ </p>
                    <p>Total Shipping Charge: $</p>
                    <p>Tax: $</p>
                    <h4>Grand Total: $</h4>
                </div>
                

            </div>
        </div>
    );
};

export default Shop;