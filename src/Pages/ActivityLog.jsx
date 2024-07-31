import React from 'react'
import Table from '../Components/Table';

const ActivityLog = () => {
    const columns = [
        {
            name: <p className='whitespace-normal'>Login Date/Time</p>,
            selector: row => row.datetime,
            style:{
                 border: "1px solid black"
            },
            width:"200px"
           
        },
        {
            name: <p>Login Status</p>,
            selector: row => row.status,
            style:{
                 border: "1px solid black"
            },
            width:"140px"
           
        },
        {
            name: <p>IP Address</p>,
            selector: row => row.ip,
            style:{
                 border: "1px solid black"
            },
            width:"150px"
           
        },
        {
            name: <p>ISP</p>,
            selector: row => row.isp,
            style:{
                 border: "1px solid black"
            },
           width:"130px"
        },
        {
            name:  <p className='whitespace-normal'>City/State/Country</p>,
            selector: row => row.city,
            style:{
                border: "1px solid black"
            },
            width:"230px"
        },
        
    ];
    const data = [
        {
            datetime: <p className='whitespace-normal'>10 Jun 2024 02:24:00</p>,
            status:<p className='whitespace-normal text-green-500'>login successfully</p>,
            ip:<p className='whitespace-normal'>192.168.10.25</p>,
            isp:<p className='whitespace-normal'>10000</p>,
            city: <p className='whitespace-normal'>Gwalior/mp/india</p>,
        },
        {
            datetime: <p className='whitespace-normal'>18 Mar 2024 03:24:00</p>,
            status:<p className='whitespace-normal text-green-500'>login successfully</p>,
            ip:<p className='whitespace-normal'>192.188.10.35</p>,
            isp:<p className='whitespace-normal'>20000</p>,
            city: <p className='whitespace-normal'>Sagar/mp/india</p>,
        },
        {
            datetime: <p className='whitespace-normal'>1 July 2024 02:24:00</p>,
            status:<p className='whitespace-normal text-green-500'>login successfully</p>,
            ip:<p className='whitespace-normal'>168.468.10.25</p>,
            isp:<p className='whitespace-normal'>100500</p>,
            city: <p className='whitespace-normal'>ShivPuri/mp/india</p>,
        },
        {
            datetime: <p className='whitespace-normal'>10 Jun 2024 02:24:00</p>,
            status:<p className='whitespace-normal text-green-500'>login successfully</p>,
            ip:<p className='whitespace-normal'>192.168.10.25</p>,
            isp:<p className='whitespace-normal'>100000</p>,
            city: <p className='whitespace-normal'>Bhind/mp/india</p>,
        },
        {
            datetime: <p className='whitespace-normal'>09 Aus 2024 02:24:00</p>,
            status:<p className='whitespace-normal text-green-500'>login successfully</p>,
            ip:<p className='whitespace-normal'>192.168.10.25</p>,
            isp:<p className='whitespace-normal'>30000</p>,
            city: <p className='whitespace-normal'>Lahar/mp/india</p>,
        },
        {
            datetime: <p className='whitespace-normal'>1 Jun 2024 02:24:00</p>,
            status:<p className='whitespace-normal text-green-500'>login successfully</p>,
            ip:<p className='whitespace-normal'>193.268.01.25</p>,
            isp:<p className='whitespace-normal'>5000</p>,
            city: <p className='whitespace-normal'>Datia/mp/india</p>,
        },
    ]
    return (
        <div className='w-full h-full bg-gray-100 p-1'>
            <div className='w-full mt-5 '>
                <div className='bg-[#2A4354] text-white px-2 py-1 rounded-t-md'>
                    <p>Activity Log</p>
                </div>
                <div className='w-full h-fit bg-white rounded-b-md p-5'>
                    <Table columns={columns} data={data} />
                </div>

            </div>
        </div>
    )
}

export default ActivityLog