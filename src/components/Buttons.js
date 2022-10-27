import React,{useState, useEffect} from 'react'
import buttons from '../data/buttons.js'
import NumberButton from './NumberButton.js'    
import OperatorButton from './OperatorButton.js'
import ClearButton from './ClearButton.js'


const Buttons = ({result, setResult, handleClick}) => {
    
    return (
        <>
        {buttons.map((button, i) => {
                if(button.type === 'number') {
                    return <NumberButton key={i} value={button.value} type={button.type} handleClick={handleClick} />
                }
                else if(button.type === 'operator') {
                    return <OperatorButton key={i} value={button.value} type={button.type} handleClick={handleClick} />
                }
                else {
                    return <ClearButton key={i} value={button.value} type={button.type} handleClick={handleClick} />
                }
        })}
       </>
    );
}

export default Buttons