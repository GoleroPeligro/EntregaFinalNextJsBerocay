import Image from "next/image"
import Counter from "@/components/ui/Counter"
import Boton from "@/components/ui/Boton"
import BtnVolver from "@/components/ui/BtnVolver"
import QtySelector from "./QtySelector"



const ProductCardDetail = ({ item }) => {

    return (
        <article className=" container m-auto mt-8 mb-2 w-7/12 min-w-max bg-win-gray-light border-2 border-r-win-btn-border-gray border-b-win-btn-border-gray p-1 ">
            <div className="text-white bg-win-blue">
                <p className="ml-2 p-1"> {item.title} </p>
            </div>
            <div className="md:flex justify-center min-w-80 border-2 border-r-win-btn-border-gray border-b-win-btn-border-gray mt-2 text-center">
                <section className="flex justify-center bg-white items-center border-r-white:border-b-white border-t-win-btn-border-gray border-l-win-btn-border-gray ">

                    <Image
                        alt={item.title}
                        src={item.image}
                        width={400}
                        height={400}
                        className="object-fill"
                    />

                </section>


                <section className="flex-initial md:w-96 max-w-80 px-4 border-t border-gray-200 pb-4 sm:text-left">
                    <h4 className="text-sm my-4 font-semibold">{item.title}</h4>
                    <p className="text-sm my-2 text-win-gray-dark">{item.description}</p>

                    <p className="text-2xl font-semibold my-3">U$S {item.price}</p>

                    <section className="flex md:justify-start justify-center items-center gap-2 my-3">
                        <QtySelector item={item} />
                      
                    </section>
                </section>
            </div>

        </article>
    )
}

export default ProductCardDetail