import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <h1>Welcome to <span>Honda Zone</span></h1>
            <h3 id='tagline'>Buy your dream bike from here.</h3>
        </div>
    );
};

export default Header;