"use client"

import MenuList from './MenuList'
import { useState } from 'react'
import Boton from './Boton'

const Menu = () => {
    const [open, setOpen] = useState(false)

    const handleMenu = () => {
        setOpen(!open)
    }

    return (
        <>
            <div onClick={handleMenu}>
               <Boton className='m-2 h-7'>Menu</Boton>
            </div>

            <MenuList open={open} setOpen={setOpen}/>
        </>
    )
}

export default Menu