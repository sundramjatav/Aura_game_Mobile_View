import React from 'react'
import { useNavigate } from 'react-router-dom';

const Account = () => {
    const navigate = useNavigate();
  
  const data = [
    { name: "My Profile" ,route:"/myprofile"},
    { name: "Rolling Commission", route:"/rolling-commission" },
    { name: "Acconut Statement", route: "/account-statement" },
    { name: "Bets History" , route:"/bets-history"},
    { name: "Profit & Loss", route:"/profit-loss" },
    { name: "Password History",route:"/password-history"},
    { name: "Activity Log", route:"/activity-log" },
  ];

  const handleClick = (route) => {
    if (route) {
      navigate(route);
    }
  };
  return (
    <div className='w-full h-full bg-white'>
        <div className='flex px-3 items-center  text-xl text-white bg-[#2A4354] gap-1 py-1'>
            <i class="ri-account-circle-fill"></i>
            <p>exchange</p>
        </div>

        {data.map((elem, index) => (
        <div
          key={index}
          className='border-b flex items-center justify-between py-3 px-2 cursor-pointer'
          onClick={() => handleClick(elem.route)}
        >
          <p className='text-lg font-bold'>{elem.name}</p>
          <div className='border w-8 h-8 flex justify-center items-center'>
            <i className="ri-arrow-right-s-line text-3xl font-bold"></i>
          </div>
        </div>
      ))}

      <button className='uppercase py-3 w-full  bg-[#CE2B1A] mt-5 text-white font-bold'>LogOut <i class="ri-logout-box-r-line"></i></button>
    </div>
  )
}

export default Account