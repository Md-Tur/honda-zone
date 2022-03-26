import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
    return (
        <div className='cart'>
            <h4>Order Details</h4>
            <p>Selected Items: {cart.length} </p>
            <div className='btn-choose'>
                <button>
                    <p>Choose One</p>
                </button>
                <button>
                    <p>Choose Again</p>
                </button>
            </div>
        </div>
    );
};

export default Cart;