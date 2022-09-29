import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import './Infromation.css';

const Information = ({info}) => {
    let time = 0;
    for( const cart of info){
        time = time + cart.time;
    }
    console.log(time)
    return (
        <div>
            <div className='info'>
                <div className='mr-1'>
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
            <div className="break">
                <h3 className='font-semibold ml-3 mb-4'>Add A Break</h3>
                <div className='flex bg-blue-50 mx-3 justify-between px-2 py-2 rounded-[15px]'>
                    <div>
                        <p className='text-[20px] font-[600] bg-white px-1 py-1 rounded-[20px] mx-2'>10s</p>
                    </div>
                    <div>
                        <p className='text-[20px] font-[600] bg-white px-1 py-1 rounded-[20px] mx-2'>20s</p>
                    </div>
                    <div>
                        <p className='text-[20px] font-[600] bg-white px-1 py-1 rounded-[20px] mx-2'>30s</p>
                    </div>
                    <div>
                        <p className='text-[20px] font-[600] bg-white px-1 py-1 rounded-[20px] mx-2'>40s</p>
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
                        <p className='font-[400] text-zinc-500'>0s</p>
                    </div>
                </div>
                <div className='flex bg-blue-50 mx-3 justify-between px-4 py-2 rounded-[15px]'>
                    <div>
                        <p className='text-[17px] font-[600]'>Break time</p>
                    </div>
                    <div>
                        <p className='font-[400] text-zinc-500'>{time}s</p>
                    </div>
                </div>
            </div>
            <div className="break">
            <button className='btn-info bg-blue-500 hover:bg-blue-400'>Added to List</button>
            </div>
        </div>
    );
};

export default Information;