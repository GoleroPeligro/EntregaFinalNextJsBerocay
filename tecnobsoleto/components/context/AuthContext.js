'use client'
import { auth, provider} from "@/firebase/config"
import { signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import { createContext, useContext, useEffect, useState } from "react"


const AuthContext = createContext()

export const useAuthContext = () => useContext(AuthContext)


export const AuthProvider = ({children}) => {

    const [user, setUser] = useState({
        logged : false,
        email : null,
        uid : null
    })

    const createUser = async (values) => {
    
        const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password)
        console.log(userCredential)
    }
    
    const loginUser = async (values) => {
        await signInWithEmailAndPassword(auth, values.email, values.password)
    }
    
    const logout = () => {
        signOut(auth)
    }

    const googleLogin = async () => {
        await signInWithPopup(auth, provider)
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            console.log(user)
            if (user) {
                setUser({
                    logged: true,
                    email: user.email,
                    uid: user.uid
                })
            } else {
                setUser({
                    logged: false,
                    email: null,
                    uid: null
                })
            }
        })
    }, [])

    return (
        <AuthContext.Provider value={{
            user,
            createUser,
            loginUser,
            logout,
            googleLogin
        }}>
            {children}
        </AuthContext.Provider>
    )
}