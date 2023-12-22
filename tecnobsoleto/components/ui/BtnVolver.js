"use client"
import { useRouter } from "next/navigation"
import Boton from "./Boton"


const BtnVolver = () => {
    const router = useRouter()
    return (
        <Boton onClick={() => router.back()}>Volver</Boton>
    )
}

export default BtnVolver