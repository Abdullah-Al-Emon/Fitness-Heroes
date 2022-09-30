import React from 'react';
import './Cart.css'

const Cart = ({cart , handleToInfo}) => {
    // const {cart , handleToInfo} = props;
    const {name, body, img, time, age, } = cart;
    return (
        <div className='cart bg-slate-100'>
            <img src={img} alt="" />
            <div className="cart-info">
                <p className='cart-name'>{name}</p>
                <p>{body}</p>
                <p>For Age: <span className='font-semibold'>{age}</span></p>
                <p>Time required: <span className='font-semibold'>{time}</span></p>
            </div>
            <button onClick={() => {handleToInfo(cart)}} className='btn-cart bg-blue-500 hover:bg-blue-400'>Added to List</button>
        </div>
    );
};

export default Cart;