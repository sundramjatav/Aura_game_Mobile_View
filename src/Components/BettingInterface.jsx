import React, { useState } from 'react';

const BettingInterface = () => {
    const [showDetails, setShowDetails] = useState(false);

    const handleButtonClick = () => {
        setShowDetails(true);
    };

    const handleCancelClick = () => {
        setShowDetails(false);
    };

    return (
        <div className="bg-white shadow-md rounded">
            <div className='bg-[#2A4354] text-white px-2 rounded-t-md'>
                <p>Winner</p>
            </div>
            <div className='w-full h-fit py-3 bg-[#bbd8f2] flex px-12 items-center justify-between'>
                <div className='flex flex-col justify-center items-center'>
                    <p className='uppercase'>Player A</p>
                    <button className='px-10 bg-[#72BBEF] rounded-md py-1' onClick={handleButtonClick}>
                        <p className='font-semibold'>1.98</p>
                        <p className='text-xs'>1935486</p>
                    </button>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <p className='uppercase'>Player B</p>
                    <button className='px-10 bg-[#72BBEF] rounded-md py-1' onClick={handleButtonClick}>
                        <p className='font-semibold'>1.98</p>
                        <p className='text-xs'>1935486</p>
                    </button>
                </div>
            </div>
            {showDetails && (
                <div className='w-full h-52 bg-blue-50 flex justify-center items-center'>
                    <button className='px-5 py-1 bg-red-100' onClick={handleCancelClick}>Cancel</button>
                </div>
            )}
        </div>
    );
};

export default BettingInterface;
