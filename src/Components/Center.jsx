import React from 'react';
import { Outlet } from 'react-router-dom';

const Center = () => {
  return (
    <div 
      className='w-full h-[calc(100%-130px)] overflow-y-auto overflow-x-hidden bg-cover bg-center'
      style={{ backgroundImage: 'url(https://aura444.com/casinobg.4aafd0d08a047031.png)' }}
    >
      <Outlet />
    </div>
  );
};

export default Center;
