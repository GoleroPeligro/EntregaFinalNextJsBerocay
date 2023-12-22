
import Image from "next/image"
import QtySelector from "@/components/products/QtySelector"
import Counter from "@/components/ui/Counter"
import Boton from "@/components/ui/Boton"
import BtnVolver from "@/components/ui/BtnVolver"
import ProductCardDetail from "@/components/products/ProductCardDetail"
import { db } from "@/firebase/config"
import { doc, getDoc } from "firebase/firestore"

const getProduct = async (id) => {
    const docRef = doc(db, 'productos', id)
    const docSnapshot = await getDoc( docRef )

    return docSnapshot.data()
}




const Detail = async ({ params }) => {
     const {slug} = params
     const item = await getProduct( slug )
    
    return(

        <ProductCardDetail item={item}/>
    )
}

export default Detail