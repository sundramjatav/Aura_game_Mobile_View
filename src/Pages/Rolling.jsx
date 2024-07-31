import React from 'react'
import Table from '../Components/Table'
import Selecter from '../Components/Selecter';
import Button from '../Components/Button';
import Input from '../Components/Input';

const Rolling = () => {
    const columns = [
        {
            name: <p>Type</p>,
            selector: row => row.type,
            style:{
                 border: "1px solid black"
            },
            width:"100px"
        },
        {
            name:  <p>Total Stack</p>,
            selector: row => row.totalStack,
            style:{
                 border: "1px solid black"
            },
        },
        {
            name: <p>Total Commission</p>,
            selector: row => row.totalCommission,
            style:{
                 border: "1px solid black"
            },
        },
        
    ];
    
    const data = [
        {
            type:<p className='whitespace-normal'>number</p>,
            totalStack:<p className='whitespace-normal'>00</p>,
            totalCommission:<p className='whitespace-normal'>100</p>
        },
    ]
  return (
    <div className='w-full h-full bg-gray-100 p-1 my-3'>
        <div className='w-full h-fit bg-slate-100 border-2 border-black rounded-md p-3 grid grid-cols-1 gap-3'>
        <Selecter defaultName={"Data Source"} name={"lock"} opt={["LIVE DATA", "BACKUP DATA", "OLD DATA"]} />
        <Selecter defaultName={"Select Sport"} name={"lock"} opt={["CRICKET", "TENNIS","CASINO","SOCCER","HORSE RACING", "KABADDI"]} />
        <Input type={"date"}/>
        <Input type={"date"}/>
        <Button title={'Get Commission'}/>
        </div>
        <div className='w-full mt-5 '>
            <div className='bg-[#2A4354] text-white px-2 py-1 rounded-t-md'>
            <p>Rolling Commission</p>
            </div>
            <div className='w-full h-fit bg-white rounded-b-md p-5'>
                <Table columns={columns} data={data}/>
            </div>

        </div>
    </div>
  )
}

export default Rolling