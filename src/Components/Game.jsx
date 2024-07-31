import { nanoid } from 'nanoid';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Game = () => {
    const [activeTab, setActiveTab] = useState('Popular');

    const tabs = [
        'Popular',
        'Teen patti',
        'Lucky-7',
        'Dragon Tiger',
        'Baccarat',
        'Andar Bahar',
        'Poker',
        'Bollywood',
        'Region'
    ];
    return (
        <>
            <div className='w-full flex gap-2 overflow-x-scroll overflow-y-hidden bg-gradient-to-b from-[#147A5A] to-[#184A3C] px-2 uppercase text-xs font-medium'>
                {tabs.map((tab) => (
                    <p
                        key={tab}
                        className={`whitespace-nowrap cursor-pointer border-r px-2 py-2 border-black rounded-full ${activeTab === tab ? 'text-white border-none' : ''
                            }`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </p>
                ))}
            </div>
            <div className='w-full p-1'>
                {activeTab === 'Popular' &&
                    <div className='h-full  grid grid-cols-3 gap-3  p-2'>
                        <Link to={`/casino-3-patti/${nanoid()}`} className='bg-green-400 flex items-center h-24 justify-center flex-col'>
                            <img src="https://aura444.com/api/users/images/1%20Day%20Teen%20Patti-01%204.svg" alt="" />
                            <p className='uppercase font-bold text-xs '>20-20 Teen patti</p>
                        </Link>
                        <Link to={`/casino-3-patti/${nanoid()}`} className='bg-green-400 flex items-center h-24 justify-center flex-col'>
                            <img src="https://aura444.com/api/users/images/1%20Day%20Teen%20Patti-01%204.svg" alt="" />
                            <p className='uppercase font-bold text-xs '>20-20 Teen patti</p>
                        </Link>
                        <Link to={`/casino-3-patti/${nanoid()}`} className='bg-green-400 flex items-center h-24 justify-center flex-col'>
                            <img src="https://aura444.com/api/users/images/1%20Day%20Teen%20Patti-01%204.svg" alt="" />
                            <p className='uppercase font-bold text-xs '>20-20 Teen patti</p>
                        </Link>
                    </div>
                }
                {activeTab === 'Teen patti' && <div className='w-20 h-20 bg-blue-200 '></div>}
                {activeTab === 'Lucky-7' && <div className='w-20 h-20 bg-yellow-200 '></div>}
                {activeTab === 'Dragon Tiger' && <div className='w-20 h-20 bg-green-200 '></div>}
                {activeTab === 'Baccarat' && <div className='w-20 h-20 bg-purple-200 '></div>}
                {activeTab === 'Andar Bahar' && <div className='w-20 h-20 bg-orange-200 '></div>}
                {activeTab === 'Poker' && <div className='w-20 h-20 bg-pink-200 '></div>}
                {activeTab === 'Bollywood' && <div className='w-20 h-20 bg-teal-200 '></div>}
                {activeTab === 'Region' && <div className='w-20 h-20 bg-indigo-200 '></div>}
            </div>
        </>
    )
}

export default Game