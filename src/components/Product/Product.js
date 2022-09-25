import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
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
            <p className='btn-text'>Add to cart</p>
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;