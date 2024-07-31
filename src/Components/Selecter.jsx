import React from 'react'

const Selecter = ({ defaultName, opt, name, onChange, width, value }) => {
  return (
    <select name={name} onChange={onChange} id="" className={`${width || 'w-full'} h-[5vh] cursor-pointer px-3 rounded outline-none font-medium border border-zinc-400`}>
      <option value={value} disabled selected>{defaultName}</option>
      {opt.length != 0 && opt.map((opt, i) => (
        <option key={i} value={opt} className='cursor-pointer'>{opt}</option>
      ))}
    </select>
  )
}

export default Selecter
