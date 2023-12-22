import Link from "next/link"
import Boton from "@/components/ui/Boton"


const ProductosLayout = ({children}) => {

    return (
        <div className="container m-auto ">
            <nav className="flex gap-2 sm:gap-4 py-2 px-4 mx-2 justify-center">
                <Link href={"/productos/all"}><Boton>Todos</Boton></Link>
                <Link href={"/productos/tvs"}><Boton>TVs</Boton></Link>
                <Link href={"/productos/reproductores_de_musica"}><Boton className="">Reproductores de música</Boton></Link>
                <Link href={"/productos/celulares"}><Boton>Celulares</Boton></Link>
            </nav>

            {children}
        </div>
    )
}

export default ProductosLayout