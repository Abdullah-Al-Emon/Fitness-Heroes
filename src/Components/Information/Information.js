import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Infromation.css';


const Information = ({ info }) => {
    const [second, setSecond] = useState(0)
    useEffect(() => {
        const value = localStorage.getItem('second')
        const result = JSON.parse(value)
        const seconds = second + Number(result);
        setSecond(seconds)
    }, [])
    
    const handleAddToBreak = (id) => {
        localStorage.setItem('second', id)
        const value = localStorage.getItem('second')
        setSecond(value)
    }

    let time = 0;
    let quantity = 0;
    for (const cart of info) {
    console.log(cart.time)    
        time = time + cart.time;
        quantity = quantity + cart.quantity;
    }

    const notify = () => {
        toast.success('🦄 Congratulations!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }

    return (
        <div className='information'>
            <div className='info'>
                <div className='mr-1'>
                    <img src='/images/pic.jpg' alt="" />
                </div>
                <div>
                    <h3 className='font-semibold'>Zahid Hossain</h3>
                    <p><FontAwesomeIcon className='text-stone-400' icon={faLocationDot}></FontAwesomeIcon> Dhaka, Bangladesh</p>
                </div>
            </div>
            <div className='flex  bg-blue-50 mx-3 justify-between px-4 py-2 rounded-[15px]'>
                <div >
                    <p className='text-[20px] font-[600]'>75<small className='font-[400] text-stone-400'>Kg</small></p>
                    <p className='font-[400] text-zinc-500'>Weight</p>
                </div>
                <div>
                    <p className='text-[20px] font-[600]'>6.5</p>
                    <p className='font-[400] text-zinc-500'>Height</p>
                </div>
                <div>
                    <p className='text-[20px] font-[600]'>25<small className='font-[400] text-stone-400'>Yrs</small></p>
                    <p className='font-[400] text-zinc-500'>Age</p>
                </div>
            </div>
            <div className="break">
                <h3 className='font-semibold ml-3 mb-4'>Add A Break</h3>
                <div className='flex bg-blue-50 mx-3 justify-between px-2 py-2 rounded-[15px]'>
                    <div>
                        <button onClick={() => { handleAddToBreak('10') }} className='text-[20px] font-[600] bg-white px-1 py-1 rounded-[20px] mx-2'>10s</button>
                    </div>
                    <div>
                        <button onClick={() => { handleAddToBreak('20') }} className='text-[20px] font-[600] bg-white px-1 py-1 rounded-[20px] mx-2'>20s</button>
                    </div>
                    <div>
                        <button onClick={() => { handleAddToBreak('30') }} className='text-[20px] font-[600] bg-white px-1 py-1 rounded-[20px] mx-2'>30s</button>
                    </div>
                    <div>
                        <button onClick={() => { handleAddToBreak('40') }} className='text-[20px] font-[600] bg-white px-1 py-1 rounded-[20px] mx-2'>40s</button>
                    </div>
                </div>
            </div>
            <div className="break">
                <h3 className='font-semibold ml-3 mb-4'>Exercise Details</h3>
                <div className='flex bg-blue-50 mx-3 mb-4 justify-between px-4 py-2 rounded-[15px]'>
                    <div>
                        <p className='text-[17px] font-[600]'>Exercise time</p>
                    </div>
                    <div>
                        <p className='font-[400] text-zinc-500'>{time}mm</p>
                    </div>
                </div>
                <div className='flex bg-blue-50 mx-3 justify-between px-4 py-2 rounded-[15px]'>
                    <div>
                        <p className='text-[17px] font-[600]'>Break time</p>
                    </div>
                    <div>
                        <p className='font-[400] text-zinc-500'>{second}s</p>
                    </div>
                </div>
            </div>
            <div className="break">
                <ToastContainer></ToastContainer>
                <button onClick={notify} className='btn-info bg-blue-500 hover:bg-blue-400'>Added to List</button>
            </div>
        </div>
    );
};

export default Information;