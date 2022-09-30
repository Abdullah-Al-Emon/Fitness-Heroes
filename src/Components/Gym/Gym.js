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
        // console.log(storeInfo)
        const saveInfo = [];
        for(const id in storeInfo){
            console.log(id)
            const addedInfo = carts.find(cart => cart.id === id)
            console.log(addedInfo)
            if(addedInfo){
                const quantity = storeInfo[id];
                addedInfo.quantity = quantity;
                saveInfo.push(addedInfo);
            }
        }
        setInfo(saveInfo);
    },[carts])

    const handleToInfo = (selectToInfo) => {
        // console.log(selectToInfo)
        // let newCart = [];
        // console.log(selectToInfo)
        // const exists = carts.find(product => console.log(product.id) === selectToInfo.id)
         const newCart = [...carts, selectToInfo]
        // console.log(carts)s
        // console.log(exists)
        // if(!exists){
        //     selectToInfo.quantity = 1;
        //     newCart = [...carts, selectToInfo];
        // }else{
        //     const rest = carts.filter(product => product.id !== selectToInfo.id)
        //     exists.quantity = exists.quantity + 1;
        //     newCart = [...rest, exists]
        // }
        // console.log(newCart)
        setInfo(newCart);
        addToDb(selectToInfo.id)
    }

    return (
        <div className='gym-container'>
            <div className=" bg-blue-50">
                <h1 className='pt-5 text-[30px] px-8 lg:px-14 text-blue-500 font-[650]'>
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