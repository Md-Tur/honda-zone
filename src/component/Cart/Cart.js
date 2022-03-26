import React from 'react';
import Items from '../Items/Items';
import './Cart.css';

const Cart = ({ cart, bestOption, best, clearCart }) => {

    let items = [];
    for (let item of cart) {
        items.push(item);
    }

    return (
        <div className='cart'>
            <h4>Order Details</h4>
            {
                items.map(item => <Items key={item.id} item={item}></Items>)
            }
            <div>
                <div>
                    <button className='choose-one' onClick={() => bestOption()}>Choose One</button>
                </div>
                <div>
                    <button className='choose-again' onClick={() => clearCart()}>Choose Again</button>
                </div>
            </div>
            <div className='best'>
                <img src={best.img} alt="" />
                <p>{best.name}</p>
            </div>

        </div>
    );
};

export default Cart;