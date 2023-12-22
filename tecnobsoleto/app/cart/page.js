'use client'
import CartProducts from "@/components/products/CartProducts"
import Boton from "@/components/ui/Boton"
import { useCartContext } from "@/components/context/CartContext"
import Link from "next/link"


const Cart = () => {

    const { cart, totalPrice, removeList } = useCartContext()

    if (cart.length === 0) {
        return (
            <div className='w-full flex justify-center'>
                <div className='w-96 h-full mt-8 border-2 border-r-win-btn-border-gray border-b-win-btn-border-gray'>
                    <div className="text-white bg-win-blue">
                        <p className="px-2">Carrito</p>
                    </div>
                    <div className="bg-win-gray-light p-2">

                        <h2 className='my-4 px-2 '>No hay productos en el carrito</h2>

                        <hr className=' w-full border-2 border-t-win-btn-border-gray border-b-white my-4' />

                        <div className='px-2 my-4'>
                            <Link href={"/productos/all"}>
                                <Boton>Ver productos</Boton>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
   


    return (
        <div className="container m-auto mt-8 mb-2 bg-win-gray-light w-2/5 min-w-min border-2 border-r-win-btn-border-gray border-b-win-btn-border-gray">
            <div className="text-white bg-win-blue">
                <p className="ml-2 p-1">Carrito</p>
            </div>
            <div className="md:flex px-4">
                <section className="flex flex-wrap justify-center items-center gap-2 ">

                    {cart.map(product => <CartProducts key={product.slug} item={product} />)}

                    <div className="">
                        <Boton onClick={removeList} className="mb-2">Vaciar carrito</Boton>
                    </div>

                </section>

                <div className="container m-auto w-full min-w-max h-max flex flex-col  md:mx-4 mb-2 p-4 gap-6 border-2 border-r-win-btn-border-gray border-b-win-btn-border-gray">
                    <p>Cantidad de items: {cart.length}</p>
                    <h1 className="text-2xl font-semibold">Precio total: U$S {totalPrice()} </h1>

                    <section className="flex items-center gap-2 mb-2 mt-6">
                        <Boton onClick={removeList} >Finalizar compra</Boton>
                        <Link href={"/productos/all"}>
                            <Boton>Ver productos</Boton>
                        </Link>
                    </section>
                </div>

            </div>

        </div>
    )
}

export default Cart