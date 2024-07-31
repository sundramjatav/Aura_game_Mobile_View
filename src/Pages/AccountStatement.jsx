import React from 'react'
import Table from '../Components/Table';
import Selecter from '../Components/Selecter';
import Button from '../Components/Button';
import Input from '../Components/Input';

const AccountStatement = () => {
    const columns = [
        {
            name: <p>Date/Time</p>,
            selector: row => row.datetime,
            style: {
                border: "1px solid black"
            },
            width: "200px"
        },
        {
            name: <p>Deposit</p>,
            selector: row => row.deposit,
            style: {
                border: "1px solid black"
            },

        },
        {
            name: <p>Withdraw</p>,
            selector: row => row.withdraw,
            style: {
                border: "1px solid black"
            },

        },
        {
            name: <p>Balance</p>,
            selector: row => row.balance,
            style: {
                border: "1px solid black"
            },

        },
        {
            name: <p>Remark</p>,
            selector: row => row.remark,
            style: {
                border: "1px solid black"
            },
            width: "180px"
        },
        {
            name: <p>From/To</p>,
            selector: row => row.fromto,
            style: {
                border: "1px solid black"
            },
            width: "200px"
        },

    ];
    const data = [
        {
            datetime: <p className='whitespace-normal'>10 Jun 2024 02:24:00</p>,
            deposit: <p className='whitespace-normal'>5000</p>,
            withdraw: <p className='whitespace-normal'>15000</p>,
            balance: <p className='whitespace-normal'>25000</p>,
            fromto: <p className='whitespace-normal'>kuch bhi</p>,
            remark: <p className='whitespace-normal'>remark</p>,
        },
    ]
    return (
        <div className='w-full h-full bg-gray-100 p-1'>
            <div className='w-full h-fit bg-slate-100 border-2 border-black rounded-md p-3 grid grid-cols-1 gap-3'>
                <Selecter defaultName={"Data Source"} name={"lock"} opt={["LIVE DATA", "BACKUP DATA", "OLD DATA"]} />
                <Input type={"date"} />
                <Input type={"date"} />
                <Button title={'Get Statement'}/>
            </div>
            <div className='w-full mt-5 '>
                <div className='bg-[#2A4354] text-white px-2 py-1 rounded-t-md'>
                    <p>Account Statement</p>
                </div>
                <div className='w-full h-fit bg-white rounded-b-md p-5'>
                    <Table columns={columns} data={data} />
                </div>

            </div>
        </div>
    )
}

export default AccountStatement