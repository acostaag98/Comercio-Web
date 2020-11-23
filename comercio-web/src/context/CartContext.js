import React, { useContext, useState } from 'react'

export const CartContext = React.createContext();

export const useCartContext = () => useContext(CartContext);

export default function CartProvider({children, defaultCart}){
    const [cart, setCart] = useState(defaultCart)
    function add(itemToAdd) {
        const item = cart.findIndex(item => item.id == itemToAdd.id)
        if (item == -1) {
            setCart([...cart, itemToAdd])
        }
        else {
            const nuevoCart = [...cart]
            const prodParaEditar = nuevoCart[item]
            prodParaEditar.cantidad = prodParaEditar.cantidad + itemToAdd.cantidad
            setCart(nuevoCart)
        }
           
    }
    function remove(itemId) {
        setCart(cart.filter(item => item.id !== itemId))
    }
    return <CartContext.Provider value={{cart, add, remove}}>
        {children}
    </CartContext.Provider>
}