import React from 'react'
import Table from '../Components/Table';
import Selecter from '../Components/Selecter';
import Input from '../Components/Input';
import Button from '../Components/Button';

const MyBets = () => {
    const columns = [
        {
            name: <p className='whitespace-normal'>Sport Name</p>,
            selector: row => row.name,
            style: {
                border: "1px solid black"
            },
            width: "200px"

        },
        {
            name: <p>Event Name</p>,
            selector: row => row.eventname,
            style: {
                border: "1px solid black"
            },
            width: "200px"

        },
        {
            name: <p>Market Name</p>,
            selector: row => row.marketname,
            style: {
                border: "1px solid black"
            },
            width: "200px"

        },
        {
            name: <p>Selection</p>,
            selector: row => row.selectiom,
            style: {
                border: "1px solid black"
            },
            width: "130px"
        },
        {
            name: <p className='whitespace-normal'>Type</p>,
            selector: row => row.type,
            style: {
                border: "1px solid black"
            },
            width: "130px"
        },
        {
            name: <p className='whitespace-normal'>Odds Req.</p>,
            selector: row => row.odds,
            style: {
                border: "1px solid black"
            },
            width: "130px"
        },
        {
            name: <p className='whitespace-normal'>Stack</p>,
            selector: row => row.stack,
            style: {
                border: "1px solid black"
            },
            width: "130px"
        },
        {
            name: <p className='whitespace-normal'>Place Time</p>,
            selector: row => row.placetime,
            style: {
                border: "1px solid black"
            },
            width: "230px"
        },
        {
            name: <p className='whitespace-normal'>Matched Time</p>,
            selector: row => row.matchtime,
            style: {
                border: "1px solid black"
            },
            width: "230px"
        },

    ];
    const data = [
        {
            name: <p className='whitespace-normal'>Casino</p>,
            eventname: <p className='whitespace-normal '>Cricket  match</p>,
            marketname: <p className='whitespace-normal'>Ind Vs Eng</p>,
            selectiom: <p className='whitespace-normal'>200</p>,
            odds: <p className='whitespace-normal'>100</p>,
            type: <p className='whitespace-normal'>2</p>,
            stack: <p className='whitespace-normal'>full</p>,
            placetime: <p className='whitespace-normal'>10 Jun 2024 02:24:00</p>,
            matchtime: <p className='whitespace-normal'>10 Jun 2024 02:24:00</p>,

        },

    ]
    return (
        <div className='w-full h-full bg-gray-100 p-1'>
            <div className='w-full h-fit bg-slate-100 border-2 border-black rounded-md p-3 grid grid-cols-1 gap-3'>
                <Selecter defaultName={"Data Source"} name={"lock"} opt={["LIVE DATA", "BACKUP DATA", "OLD DATA"]} />
                <Selecter defaultName={"Select Sport"} name={"lock"} opt={["Cricket", "Tennis", "Casino", "Soccer", "Horse racing", "Kabaddi"]} />
                <Selecter defaultName={"Bet Type"} name={"lock"} opt={["Settle", "Void", "Unsettled"]} />
                <Input type={"date"} />
                <Input type={"date"} />
                <Button title={'Get History'}/>
            </div>
            <div className='w-full mt-5 '>
                <div className='bg-[#2A4354] text-white px-2 py-1 rounded-t-md'>
                    <p>My Bets</p>
                </div>
                <div className='w-full h-fit bg-white rounded-b-md p-5'>
                    <Table columns={columns} data={data} />
                </div>

            </div>
        </div>
    )
}

export default MyBets