import React, { useContext, useState } from 'react'

export const CartContext = React.createContext();

export const useCartContext = () => useContext(CartContext);

export default function CartProvider({children, defaultCart}){
    const [cart, setCart] = useState(defaultCart)
    function add(item) {
        setCart([...cart, item])
        
    }
    function remove() {

    }
    return <CartContext.Provider value={{cart, add, remove}}>
        {children}
    </CartContext.Provider>
}