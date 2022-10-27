import React from 'react'

const ClearButton = ({value,type,handleClick}) => {
  return (
    <button className={`${type} ${type === 'all_clear' ? 'col-span-2' : ''} border p-4 py-8 bg-[#F45A69] text-white hover:bg-[#06283D] px-8`} onClick={() => handleClick(value)}>{value}</button>
  )
}

export default ClearButton