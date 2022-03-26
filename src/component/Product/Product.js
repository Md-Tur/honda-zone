import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
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
            <div>
                <button className='btn-cart' onClick={() => addProductToCart(product)}>
                    <p className='btn-text'>Buy Now</p>
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};

export default Product;