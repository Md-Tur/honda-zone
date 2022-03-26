import React from 'react';
import './Items.css'

const Items = (props) => {
    const { img, name } = props.item;
    return (
        <div className='items'>
            <img src={img} alt="" />
            <p>{name}</p>
        </div>
    );
};

export default Items;