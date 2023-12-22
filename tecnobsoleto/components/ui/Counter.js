'use client'
import {useState} from 'react'
import Boton from './Boton'

const Counter = ({stock}) => {
 
    const [counter, setCounter] = useState(1);

    const increase = () => {
        setCounter(counter + 1)
    }
    const decrease = () => {
        setCounter(counter - 1)
    }
    return (
    <div className='flex justify-center items-center gap-3 max-w-max bg-white border-px my-2 border-win-btn-border-gray text-center'>
        <Boton onClick = {decrease} className='px-2' disabled = {counter === 1?true:false}> - </Boton>
        <p className='w-4'>{counter}</p>
        <Boton onClick = {increase} className='px-2' disabled = {counter === stock?true:false}> + </Boton>
    </div>
  )
}

export default Counter