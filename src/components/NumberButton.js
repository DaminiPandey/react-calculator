import React from 'react'

const NumberButton = ({value,type,handleClick}) => {
  return (
    <button className={`${type} border bg-[#008090] text-white p-4 py-8 hover:bg-[#06283D] px-8`} onClick={() => handleClick(value)}>{value}</button>
  )
}

export default NumberButton