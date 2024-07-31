import React from 'react'
import home from '../assets/home.svg'
import inplay from '../assets/inplay.svg'
import sport from '../assets/sport.svg'
import pin from '../assets/pin.svg'
import account from '../assets/account.svg'
import { Link } from 'react-router-dom'
const Bottom = () => {
  return (
    <div className=' w-full  h-[70px] bottom-0 bg-[#213643] text-white flex items-center justify-between '>
        <Link to={'/'} className='flex items-center justify-center flex-col w-[20%]'>
            <img src={home} className='w-7' alt="" />
            <p>Home</p>
        </Link>
        
        <Link to={'/inplay'} className='flex items-center justify-center flex-col w-[20%]'>
            <img src={inplay} className='w-7' alt="" />
            <p>In-Play</p>
        </Link>
        <Link to={'/sport'} className='flex items-center justify-center flex-col w-[20%]'>
            <img src={sport} className='w-7' alt="" />
            <p>Sports</p>
        </Link>
        <Link to={'/multi-markets'} className='flex items-center justify-center flex-col w-[20%]'>
            <img src={pin} className='w-7' alt="" />
            <p className='truncate w-full'>Multi Markets </p>
        </Link>
        <Link to={'/account'} className='flex items-center justify-center flex-col w-[20%]'>
            <img src={account} className='w-7' alt="" />
            <p>Account</p>
        </Link>
    </div>
  )
}

export default Bottom