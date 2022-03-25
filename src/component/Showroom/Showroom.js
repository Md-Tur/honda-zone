import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Showroom.css';

const Showroom = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const addProductToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
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
                <h4>Order Details</h4>
                <p>Selected Items: {cart.length} </p>
            </div>
        </div>
    );
};

export default Showroom;