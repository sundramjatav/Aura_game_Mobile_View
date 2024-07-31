// Sport.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import home from '../assets/home.svg'
import pin from '../assets/pin.svg'
import cricket from '../assets/cricket.svg'
import football from '../assets/football.svg'
import tennis from '../assets/Tennis.svg'
const Sport = () => {
  const navigate = useNavigate();
  
  const data = [
    { name: "Cricket" },
    { name: "Tennis" },
    { name: "Casino", route: "/livecasino" },
    { name: "Horse Racing" },
    { name: "Kabaddi" },
    { name: "Basketball" },
    { name: "Politics" },
    { name: "Binary" },
    { name: "Lottery" }
  ];

  const handleClick = (route) => {
    if (route) {
      navigate(route);
    }
  };

  return (
    <div className='w-full min-h-screen bg-white'>
      <div className='w-full h-44 flex flex-col py-1 justify-between bg-[#2A4354]'>
        <p className='text-center text-white'>Quick Links</p>
        <div className='w-full h-24 text-white flex'>
        <Link to={'/'} className='flex items-center justify-center flex-col w-[20%] bg-[#14213D] border-r'>
            <img src={home} className='w-7' alt="" />
            <p>Home</p>
        </Link>
        
        <Link to={'/multi-markets'} className='flex items-center justify-center flex-col w-[20%] bg-[#14213D] border-r'>
            <img src={pin} className='w-7' alt="" />
            <p className='text-center'>multi markets</p>
        </Link>
        <Link to={'/sport'} className='flex items-center justify-center flex-col w-[20%] bg-[#14213D] border-r'>
            <img src={cricket} className='w-7' alt="" />
            <p>Home</p>
        </Link>
        
        <Link to={'/sport'} className='flex items-center justify-center flex-col w-[20%] bg-[#14213D] border-r'>
            <img src={football} className='w-7' alt="" />
            <p>In-Play</p>
        </Link>
        <Link to={'/sport'} className='flex items-center justify-center flex-col w-[20%] bg-[#14213D] border-r'>
            <img src={tennis} className='w-7' alt="" />
            <p>Home</p>
        </Link>
        </div>
        <p className='text-white text-center font-bold'>All Sports</p>
      </div>

      {data.map((elem, index) => (
        <div
          key={index}
          className='border-b flex items-center justify-between py-3 px-2 cursor-pointer'
          onClick={() => handleClick(elem.route)}
        >
          <p className='text-xl font-bold'>{elem.name}</p>
          <div className='border w-8 h-8 flex justify-center items-center'>
            <i className="ri-arrow-right-s-line text-3xl font-bold"></i>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sport;
