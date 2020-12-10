import React, { useContext, useState } from 'react'

export const CartContext = React.createContext();

export const useCartContext = () => useContext(CartContext);

export default function CartProvider({children, defaultCart}){
    const [cart, setCart] = useState(defaultCart)
    function add(itemToAdd) {
        const item = cart.findIndex(item => item.id === itemToAdd.id)
        if (item === -1) {
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
    function calcularTotal(cart) {
        let acc = 0
        for (let i = 0; i < cart.length; i++) {
            acc += cart[i].cantidad * cart[i].price;
        }
        return acc
    }
    function mostrarItems() {
        return cart.map(item => (
            <div>
                <p></p>
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            • {item.title}
                        </div>
                        <div className="col-sm">
                            <p>Cantidad: {item.cantidad}</p>    
                        </div>
                        <div className="col-sm">
                            ${item.price * item.cantidad}
                        </div>
                        <div className="col-sm">
                            <button onClick={() => remove(item.id)} class="btn btn-sm btn-danger"><i class="fa fa-trash"></i> </button>
                        </div>
                    </div>
                </div>
                <p></p>
            </div>
        ))
    }
    function mostrarDetallePedido() {
        return cart.map(item => (
            <div>
                <p></p>
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            • {item.title}
                        </div>
                        <div className="col-sm">
                            <p>Cantidad: {item.cantidad}</p>    
                        </div>
                        <div className="col-sm">
                            ${item.price * item.cantidad}
                        </div>
                    </div>
                </div>
                <p></p>
            </div>
        ))
    }
    return <CartContext.Provider value={{cart, add, remove, calcularTotal, mostrarItems, mostrarDetallePedido}}>
        {children}
    </CartContext.Provider>
}