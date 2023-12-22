import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "@/firebase/config"
import Boton from "@/components/ui/Boton"
import Image from "next/image"
import Link from "next/link"
import LogoutButton from "./LogoutButton"

const getProducts = async (categoria) => {
    const productsRef = collection(db, 'productos')
    // const q = categoria === "all"
    //             ? productsRef
    //             : query(productsRef, where('type', '==', categoria))

    const querySnapshot = await getDocs( productsRef )
    // throw new Error("Error de carga de productos")
    return querySnapshot.docs.map( docSnapshot => docSnapshot.data() )
}

const ProductTable = async () => {

    const items = await getProducts()


    return (

        <div className="container m-auto mt-8 mb-2 bg-win-gray-light w-11/12 min-w-min border-2 border-r-win-btn-border-gray border-b-win-btn-border-gray">
            <div className="text-white bg-win-blue">
                <p className="ml-2 p-1">Panel de administración</p>
            </div>
            <div className="md:flex px-4">
                <section className="flex flex-wrap justify-between gap-2 text-sm mb-4">
                    <Link href={"admin/agregar"}>
                        <Boton className="py-2 mb-6 mt-8">Agregar producto</Boton>
                    </Link>
                    <LogoutButton />

                    <table className="table-fixed">
                        <thead>
                            <tr className="bg-win-gray-dark">
                                <th className="border-2 border-win-gray-light p-2">Producto</th>
                                <th className="border-2 border-win-gray-light p-2">Descripción</th>
                                <th className="border-2 border-win-gray-light p-2">Precio</th>
                                <th className="border-2 border-win-gray-light p-2">Categoria</th>
                                <th className="border-2 border-win-gray-light p-2">Stock</th>
                                <th className="border-2 border-win-gray-light p-2">Imagen</th>
                                <th className="border-2 border-win-gray-light p-2"></th>
                            </tr>

                        </thead>

                        {items.map(product =>
                            <tbody key={product.slug}>
                                <tr className="border-2 border-r-win-btn-border-gray border-b-win-btn-border-gray text-center" >
                                    <td className="p-2 border-2 border-win-gray-dark">{product.title}</td>
                                    <td className="p-2 border-2 border-win-gray-dark max-w-36 text-sm text-win-gray-dark">{product.description}</td>
                                    <td className="p-2 w-24 border-2 border-win-gray-dark"><span>U$S:</span> {product.price}</td>
                                    <td className="p-2 border-2 border-win-gray-dark">{product.type}</td>
                                    <td className="p-2 border-2 border-win-gray-dark">{product.inStock}</td>
                                    <td className="p-2 border-2 border-win-gray-dark w-40 bg-white"><Image
                                        alt={product.title}
                                        src={product.image}
                                        height={288}
                                        width={288}
                                        className="object-contain h-56 w-80 sm:w-96 items-center"
                                    /></td>
                                    <td className="flex flex-col gap-4 p-4">
                                        <Link href={`/admin/Editar/${product.slug}`}>
                                            <Boton>Editar</Boton>
                                        </Link>
                                      
                                            <Boton>Eliminar</Boton>
                                   
                                    </td>
                                </tr>

                            </tbody>

                        )}

                    </table>

                </section>

            </div>

        </div>
    )
}

export default ProductTable