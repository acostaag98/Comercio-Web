import React, { useContext, useState } from 'react'

export const CartContext = React.createContext();

export const useCartContext = () => useContext(CartContext);

export default function CartProvider({children, defaultCart}){
    const [cart, setCart] = useState(defaultCart)
    function add() {
        const item = cart.findIndex(c => c)
        if (!item) {
            setCart([...cart, item])
        }
        else {
            item = {...item, cantidad: +item.cantidad}
            setCart([...cart])
        }
           
    }
    function remove(itemId) {
        setCart(cart.filter(item => item.id !== itemId))
    }
    return <CartContext.Provider value={{cart, add, remove}}>
        {children}
    </CartContext.Provider>
}