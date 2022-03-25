import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Showroom.css';

const Showroom = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const addProductToCart = () => {
        console.log('clicked');
    }

    return (
        <div className='showroom-container'>
            <div className="product-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        addProductToCart={addProductToCart}
                    ></Product>)
                }
            </div>

            <div className="cart-container">
                <h4>it's cart</h4>
            </div>
        </div>
    );
};

export default Showroom;