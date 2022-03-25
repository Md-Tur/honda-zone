import React from 'react';
import './Product.css';

const Product = (props) => {
    const { name, price, img } = props.product;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <h3>Name: {name}</h3>
            <h5>Price: ${price}</h5>
        </div>
    );
};

export default Product;