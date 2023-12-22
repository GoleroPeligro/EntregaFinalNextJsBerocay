import EditForm from "@/components/admin/EditarForm";
import { db } from "@/firebase/config"
import { doc, getDoc } from "firebase/firestore"

const getProduct = async (id) => {
    const docRef = doc(db, 'productos', id)
    const docSnapshot = await getDoc( docRef )

    return docSnapshot.data()
}
    

const EditarProducto = async ({params})=> {
    const {slug} = params
    const item = await getProduct( slug )
//     const item = await fetch(`http://localhost:3000/api/product/${slug}`,
// {
//     cache: 'no-store'
// }).then(r => r.json())

    return(
        <div>
            <EditForm item={item}/>
        </div>
    )
}

export default EditarProducto