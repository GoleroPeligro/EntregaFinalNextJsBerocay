'use client'
import Boton from "../ui/Boton";
import { useAuthContext } from "../context/AuthContext";

const LogoutButton = () => {
    const { logout } = useAuthContext()

    return <Boton onClick={logout}  className="h-min mb-6 py-2 mt-8">Cerrar sesión</Boton>
}

export default LogoutButton