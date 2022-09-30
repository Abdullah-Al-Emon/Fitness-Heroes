import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import Cart from '../Cart/Cart';
import "./Gym.css"
import Information from '../Information/Information';
import { addToDb, getStoreCart } from '../../utilities/fakedb';

const Gym = () => {
    const [carts, setCarts] = useState([]);
    const [info, setInfo] = useState([]);

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setCarts(data))
    }, [])

    useEffect(() => {
        const storeInfo = getStoreCart();
        const saveInfo = [];
        for(const id in storeInfo){
            const addedInfo = carts.find(cart => cart.id === id)
            if(addedInfo){
                const quantity = storeInfo[id];
                addedInfo.quantity = quantity;
                saveInfo.push(addedInfo);
            }
        }
        setInfo(saveInfo);
    },[carts])

    const handleToInfo = (selectToInfo) => {
        const exists = carts.find(product => product.id !== selectToInfo.id)
        console.log(exists)
        
        addToDb(selectToInfo.id)
    }

    return (
        <div className='gym-container'>
            <div className=" bg-blue-50">
                <h1 className='pt-5 text-[30px] px-14 text-blue-500 font-[650]'>
                    <FontAwesomeIcon className='mr-1' icon={faDumbbell} /> 
                    Fitness-Heroes</h1>
                    <p className='text-[20px] font-semibold mt-1 px-14'>Select today's exercise</p>
                <div className='cart-container'>{
                    carts.map(cart => <Cart 
                    handleToInfo={handleToInfo}
                    cart={cart}
                    key={cart.id}
                    ></Cart>)
                }</div>
            </div>
            <div className="information-container">
                <Information info={info}></Information>
            </div>
        </div>
    );
};

export default Gym;