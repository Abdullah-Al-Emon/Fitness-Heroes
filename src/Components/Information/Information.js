import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import './Infromation.css';

const Information = () => {
    return (
        <div>
            <div className='info'>
                <div >
                <img src='/images/pic.jpg' alt="" />
                </div>
                <div>
                    <h3 className='font-semibold'>Zahid Hossain</h3>
                    <p><FontAwesomeIcon className='text-stone-400' icon={faLocationDot}></FontAwesomeIcon> Dhaka, Bangladesh</p>
                </div>
            </div>
            <div className='flex bg-blue-50 mx-3 justify-between px-4 py-2 rounded-[15px]'>
            <div>
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
        </div>
    );
};

export default Information;