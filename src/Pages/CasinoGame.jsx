import React from 'react'
import BettingInterface from '../Components/BettingInterface'

const CasinoGame = () => {
  return (
    <div className='w-full h-full bg-gray-100'>
        <div className='w-full h-60 bg-black sticky top-0'></div>
        <BettingInterface/>
    </div>
  )
}

export default CasinoGame