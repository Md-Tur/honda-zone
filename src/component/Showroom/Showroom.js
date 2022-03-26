import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Showroom.css';

const Showroom = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [best, setBest] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const addProductToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }

    const bestOption = () => {
        const best = [...cart];
        const random = Math.floor(Math.random() * best.length);
        setBest(best[random]);
    }

    const clearCart = () => {
        setCart([]);
        setBest([]);
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
                <Cart cart={cart} bestOption={bestOption} best={best} clearCart={clearCart}></Cart>
            </div>
        </div>
    );
};

export default Showroom;