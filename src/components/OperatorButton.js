import React from 'react'

const OperatorButton = ({value,type,handleClick}) => {
  return (
    <button className={`${type} border ${value === '+' ? 'row-span-2 ' : ''} p-4 py-8 bg-[#104B5F] text-white hover:bg-[#06283D] px-8`} onClick={() => handleClick(value)}>{value}</button>
  )
}

export default OperatorButton