import React from 'react';
import './Product.css';

const Product = (props) => {
    const { addProductToCart, product } = props;
    const { name, price, img } = product;

    return (
        <div className='product-cart'>
            <div className='product'>
                <img src={img} alt="" />
                <h3>Name: {name}</h3>
                <h5>Price: ${price}</h5>
            </div>
            <button className='btn-cart' onClick={() => addProductToCart(product)}>
                <p>Buy Now</p>
            </button>
        </div>
    );
};

export default Product;