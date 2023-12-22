import Image from "next/image";
import logo from '@/public/img/logo.png';
import cartlogo from '@/public/img/cart-icons/carrito-productos.png'
import Menu from "./Menu";
import Link from "next/link";
import CartWidget from "./CartWidget";


import React from 'react'



const Header = () => {

   

    return (
        <header className="h-full bg-win-gray-light border-2 border-b-win-btn-border-gray border-t-white pl-2 pr-5 sticky top-0">
            <div className="container m-auto py-2 flex justify-between items-center">
                <Link href={'/'}>
                    <Image
                        alt="logo"
                        src={logo}
                        height={200}
                        width={300}
                    />
                </Link>
                <div className="flex justify-end items-center gap-2 pr-2 ">
                    <Menu />
                    <CartWidget />


                </div>


            </div>
        </header>
    )
}

export default Header