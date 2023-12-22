'use client'
import { createContext, useContext, useState } from "react"

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const isInCart = (slug) => {
        return cart.some(item => item.slug === slug)
    }

    const addToCart = (item, quantity) => {
        if(isInCart(item.slug)){
            setCart(cart.map(product => {
                return product.slug === item.slug ? { ...product, quantity: product.quantity + quantity} : product
            }))
        }    else{
            setCart([...cart, {...item, quantity}]);
        }
        
        //setCart([...cart, item])
    }



    const totalQty = () => {
        return cart.reduce((acc, item) => acc + item.quantity, 0)
    }

    const totalPrice = () => {
        return cart.reduce((prev, act) => prev + act.price, 0)
    }

    const deleteItem = (slug) => {
        setCart(cart.filter(product => product.slug !== slug));
    }

    const removeList = () => setCart([])

    console.log(cart)



    return (
        <CartContext.Provider
            value={
                {
                    cart,
                    addToCart,
                    isInCart,
                    totalQty,
                    totalPrice,
                    deleteItem,
                    removeList
                }}>
            {children}
        </CartContext.Provider>
    )
}