import React from 'react';
import './Product.css'

const Product = (props) => {
    // const{handlerAddToCart} = props.product;
    const {img,name,price,seller,ratings} = props.product;
    
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <p className='product-name'>{name}</p>
            <p>Price: ${price}</p>
            <br />
            <p>Manufacturer: {seller}</p>
            <p>Ratings: {ratings} star</p>
            </div>
            
            <button onClick={()=>props.handlerAddToCart(props.product)} className='btn-cart'>
            <p>Add to cart</p>
            </button>
            
        </div>
    );
};

export default Product;