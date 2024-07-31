import React from 'react'
import Table from '../Components/Table';

const PasswordHistory = () => {
    const columns = [
        {
            name: <p>Date/Time</p>,
            selector: row => row.datetime,
            style:{
                 border: "1px solid black"
            },
           
        },
        {
            name:  <p>Remark</p>,
            selector: row => row.remark,
            style:{
                 border: "1px solid black"
            },
        },
        
    ];
    const data = [
        {
            datetime: <p className='whitespace-normal'>10 Jun 2024 02:24:00</p>,
            remark: <p className='whitespace-normal'>Remark</p>,
        },
    ]
    return (
        <div className='w-full h-full bg-gray-100 p-1'>
            <div className='w-full mt-5 '>
                <div className='bg-[#2A4354] text-white px-2 py-1 rounded-t-md'>
                    <p>Password Change History</p>
                </div>
                <div className='w-full h-fit bg-white rounded-b-md p-5'>
                    <Table columns={columns} data={data} />
                </div>

            </div>
        </div>
    )
}

export default PasswordHistory