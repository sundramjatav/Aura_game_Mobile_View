import React from 'react'
import Table from '../Components/Table';
import Selecter from '../Components/Selecter';
import Input from '../Components/Input';
import Button from '../Components/Button';

const ProfitLoss = () => {
    const columns = [
        {
            name: <p className='whitespace-normal'>Sport Name</p>,
            selector: row => row.sportname,
            style: {
                border: "1px solid black"
            },
            width: "200px"

        },
        {
            name: <p>Profit & Loss</p>,
            selector: row => row.profitloss,
            style: {
                border: "1px solid black"
            },
            width: "140px"

        },
        {
            name: <p>Commission</p>,
            selector: row => row.commission,
            style: {
                border: "1px solid black"
            },
            width: "150px"

        },
        {
            name: <p>Total P&L</p>,
            selector: row => row.Total,
            style: {
                border: "1px solid black"
            },
            width: "130px"
        },

    ];
    const data = [
        {
            sportname: <p className='whitespace-normal'>Casino</p>,
            profitloss: <p className='whitespace-normal'>19</p>,
            commission: <p className='whitespace-normal'>100</p>,
            Total: <p className='whitespace-normal'>10000</p>,
        },

    ]
    return (
        <div className='w-full h-full bg-gray-100 p-1'>
            <div className='w-full h-fit bg-slate-100 border-2 border-black rounded-md p-3 grid grid-cols-1 gap-3'>
                <Selecter defaultName={"Data Source"} name={"lock"} opt={["LIVE DATA", "BACKUP DATA", "OLD DATA"]} />
                <Input type={"date"} />
                <Input type={"date"} />
                <Button title={'Get P&L'} />
            </div>
            <div className='w-full mt-5 '>
                <div className='bg-[#2A4354] text-white px-2 py-1 rounded-t-md'>
                    <p>Profit & Loss</p>
                </div>
                <div className='w-full h-fit bg-white rounded-b-md p-5'>
                    <Table columns={columns} data={data} />
                </div>

            </div>
        </div>
    )
}

export default ProfitLoss