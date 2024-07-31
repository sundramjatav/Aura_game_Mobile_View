import React from 'react'
import Navbar from '../Components/Navbar'
import Bottom from '../Components/Bottom'
import Center from '../Components/Center'

const Home = () => {
  return (
    <div className='h-screen'>
        <Navbar/>
        <Center/>
        <Bottom/>
    </div>
  )
}

export default Home