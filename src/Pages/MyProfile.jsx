import React from 'react'

const MyProfile = () => {
  return (
    <div className='w-full h-full bg-gray-100 py-5 px-1'>
        <div className='bg-white rounded-md  overflow-hidden shadow-md'>
        <div className='flex px-3 items-center  text-white bg-[#2A4354] gap-1 py-1'>
            Account Details
        </div>
        <div className='flex px-5 items-center  font-bold text-black border-b gap-1 py-2'>
            Name
        </div>
        <div className='flex px-5 items-center  uppercase text-black border-b gap-1 py-2'>
            Sundram Jatav
        </div>
        <div className='flex px-5 items-center  font-bold text-black border-b gap-1 py-2'>
            Commission
        </div>
        <div className='flex px-5 items-center  text-black border-b gap-1 py-2'>
            0
        </div>
        <div className='flex px-5 items-center  font-bold text-black border-b gap-1 py-2'>
            Exposure List
        </div>
        <div className='flex px-5 items-center  text-black border-b gap-1 py-2'>
            10000
        </div>
        <div className='flex px-5 items-center  font-bold text-black border-b gap-1 py-2'>
            Password
        </div>
        <div className='flex px-5 items-center  text-black border-b gap-1 py-2'>
           *******
        </div>
        </div>
    </div>
  )
}

export default MyProfile