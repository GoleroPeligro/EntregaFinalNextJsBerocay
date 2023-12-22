'use client'
import Counter from "../ui/Counter"
import Boton from "@/components/ui/Boton"
import BtnVolver from "@/components/ui/BtnVolver"
import { useCartContext } from "../context/CartContext"
import { useState } from "react"

const QtySelector = ({item}) => {

    const {addToCart} = useCartContext()

    const [quantity, setQuantity] = useState()

    const handleAdd = () => {
        addToCart({
            ...item,
            quantity
        })
    }
    


    return (
        <div>
            <section className="flex md:justify-start justify-center items-center gap-2 my-3">
                <Counter stock={item.inStock} counter={quantity} setCounter= {setQuantity}/>
                <p className="text-xs text-win-gray-dark">Stock: {item.inStock}</p>
            </section>

            <div className='flex md:justify-start justify-center py-2 gap-2'>

                <Boton onClick = {handleAdd} >Agregar al carrito</Boton>
                <BtnVolver />

            </div>
        </div>
    )
}

export default QtySelector