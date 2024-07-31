import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-gradient-to-b from-[#147A5A] to-[#184A3C] text-white flex items-center justify-between p-3 h-[60px] top-0'>
       <img src={logo} className='md:w-52 w-24' alt="" />
       <div className='md:flex items-center gap-5 hidden'>
        <div>
            <p>Main PIT 0.00</p>
            <p>Exposure(0.00)</p>
        </div>
        <div className='px-2 py-1 bg-black/30'>
        <i class="ri-refresh-line text-lg"></i>
        </div>
        <div className='px-5 py-1 gap-2 flex items-center bg-black/30 text-lg' >
         <i class="ri-user-fill text-yellow-500"></i>
            <p>My Account</p>
            <i class="ri-arrow-down-s-fill text-yellow-500"></i>
        </div>
       </div>
       <div>
            <Link to={'/login'} className='px-5 py-1 bg-red-500 rounded-md font-semibold'>login <i class="ri-login-box-line"></i></Link>
       </div>
    </div>
  )
}

export default Navbar