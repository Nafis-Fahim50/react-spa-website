import React from 'react';
import './cart.css'

const Cart = ({cart}) => {
    // console.log(cart);
    let total = 0;
    let shipping = 0;
    let quantity = 0

    for ( const product of cart){
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    const taxes = (total * 0.1).toFixed(2)
    const tax = parseFloat(taxes);
    
    const grandTotal = total + shipping + tax;
    return (
        <div className='cart'>
            <h3 className='order'> Order Summary</h3>
                <br />
                <div className='check-out'>
                    <p>Selected Items: {quantity} </p>
                    <p>Total Price: $ {total} </p>
                    <p>Total Shipping Charge: $ {shipping}</p>
                    <p>Tax: $ {tax}</p>
                    <h4>Grand Total: $ {grandTotal.toFixed(2)}</h4>
                </div>
        </div>
    );
};

export default Cart;