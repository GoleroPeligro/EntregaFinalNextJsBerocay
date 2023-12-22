'use client'
import { useAuthContext } from "@/components/context/AuthContext"

const AdminLayout = ({ children, login }) => {
    const { user } = useAuthContext()
    return (
        <div>
           <div>
            { user.logged ? children : login }
        </div>
        </div>
    )
}

export default AdminLayout