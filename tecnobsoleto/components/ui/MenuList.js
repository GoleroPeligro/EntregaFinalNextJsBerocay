"use client"
import Link from "next/link"
import Boton from "./Boton"

const MenuList = ({ open, setOpen }) => {

    const handleClose = () => setOpen(false)

    return (
        <div className={`${open ? 'visible opacity-100' : 'invisible opacity-0'} transition-all fixed inset-0 bg-black/50 flex justify-end `}>

            <aside className={`${!open ? 'translate-x-56' : ''} transition-all w-56 bg-win-gray-light pt-2 pr-2`}>
                <div
                    className=" text-right p-1 text-1xl"
                    onClick={handleClose}
                >
                    <Boton>X</Boton>
                </div>

                <nav className="flex flex-col gap-1 px-4 text-center mt-10">
                    <hr className="border-2 border-t-win-btn-border-gray border-b-white"/>
                    <Link onClick={handleClose} href={"/"} className=" p-2 hover:bg-win-blue hover:text-white">Inicio</Link>
                    <hr className="border-2 border-t-win-btn-border-gray border-b-white"/>
                    <Link onClick={handleClose} href={"/productos/all"} className=" p-2 hover:bg-win-blue hover:text-white">Productos</Link>
                    <hr className="border-2 border-t-win-btn-border-gray border-b-white"/>
                    <Link onClick={handleClose} href={"/nosotros"} className=" p-2 hover:bg-win-blue hover:text-white">Nosotros</Link>
                    <hr className="border-2 border-t-win-btn-border-gray border-b-white"/>
                    <Link onClick={handleClose} href={"/contacto"} className=" p-2 hover:bg-win-blue hover:text-white">Contacto</Link>
                    <hr className="border-2 border-t-win-btn-border-gray border-b-white"/>
                </nav>
            </aside>
        </div>
    )
}

export default MenuList