import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import Cart from '../Cart/Cart';
import "./Gym.css"
import Information from '../Information/Information';

const Gym = () => {
    const [carts, setCarts] = useState([]);
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setCarts(data))
    }, [])
    return (
        <div className='gym-container'>
            <div className=" bg-blue-50">
                <h1 className='pt-5 text-[30px] px-12 text-blue-500 font-[650]'>
                    <FontAwesomeIcon className='mr-1' icon={faDumbbell} /> 
                    Fitness-Heroes</h1>
                <div className='cart-container'>{
                    carts.map(cart => <Cart 
                    cart={cart}
                    key={cart.id}
                    ></Cart>)
                }</div>
            </div>
            <div className="information-container">
                <Information></Information>
            </div>
        </div>
    );
};

export default Gym;