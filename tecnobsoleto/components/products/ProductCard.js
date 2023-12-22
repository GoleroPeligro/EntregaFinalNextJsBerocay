import Image from "next/image"
import Link from "next/link"
import { Suspense } from "react"



const ProductCard = ({ item }) => {

    return (
        <article className="basis-80 sm:basis-72 bg-win-gray-light border-2 border-r-win-btn-border-gray border-b-win-btn-border-gray p-1">
            <div className="text-white bg-win-blue">
                <p className="ml-2 p-1">{item.type}</p>
            </div>
            <div className="border-2 border-r-win-btn-border-gray border-b-win-btn-border-gray mt-2">
                <Link href={`/productos/detail/${item.slug}`}>
                    <div className=" items-center h-56 w-80 sm:w-96 bg-white border-r-white:border-b-white border-t-win-btn-border-gray border-l-win-btn-border-gray ">
                        <Suspense fallback={ <Image
                        alt='Icono cargando'
                        src= {'/img/loadImage.gif'}
                        height={120}
                        width={120}
                        className="object-contain h-56 w-80 sm:w-80 items-center"
                    />}>
                            <Image
                                alt={item.title}
                                src={`${item.image}`}
                                height={288}
                                width={288}
                                className="object-contain h-56 w-80 sm:w-96 items-center"
                            />
                        </Suspense>

                    </div>


                    <div className="px-4 border-t border-gray-200 pb-4 sm:text-left text-center">
                        <h4 className="text-sm my-4">{item.title}</h4>
                        <p className="text-2xl font-semibold">U$S {item.price}</p>
                    </div>
                </Link>
            </div>

        </article>
    )
}

export default ProductCard