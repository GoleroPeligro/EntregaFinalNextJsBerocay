'use client'
import Image from "next/image"
import Link from "next/link"
import cartlogo from '@/public/img/cart-icons/carrito-productos.png'
import { useCartContext } from "../context/CartContext"

const CartWidget = () => {
    const { cart } = useCartContext()

    return (
        <div className=" min-w-16 h-7 border-2 border-b-win-btn-border-gray border-t-white px-2 active:border-r-white active:border-b-white active:border-t-win-btn-border-gray active:border-l-win-btn-border-gray  active:translate-y-py active:translate-x-px ">
            <Link href={'/cart'}>
                <div className="flex items-center justify-center gap-2 ">

                    <Image
                        alt="cart-logo"
                        src={cartlogo}
                        height={24}
                        width={24}
                        className=""
                    />
                    {cart.length > 0 ? <span className="text-xs bg-win-blue text-white px-2">{cart.length}</span> : <span className="collapse"></span>}
                </div>
            </Link>
        </div>

    )
}

export default CartWidget