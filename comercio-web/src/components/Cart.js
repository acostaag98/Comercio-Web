import React from 'react';
import { useCartContext } from '../context/CartContext';
import { Link } from 'react-router-dom'
import './estilos.css'
import { Button } from 'react-bootstrap';




export default function Cart() {
    const { cart, remove, calcularTotal } = useCartContext()
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
    function showCart(cart) {
        if (cart.length === 0) {
            return  <div>
            <div>
                <h1 className='titleCart'>CARRITO:</h1>
                <h2 className='pCart'>Esta vacío</h2>
            </div>
            <div className='checkout'>
                <h2><Link to='/home'><Button id='text-cart' className='mx-auto btn-success'>Ir a comprar!</Button></Link></h2>
            </div>
        </div>

        }
        else {
            return <div>
                <div>
                    <h1 className='titleCart'>CARRITO: </h1>
                    {mostrarItems()}
                </div>
                <div className='checkout'>
                    <h1>Total: ${calcularTotal(cart)} </h1>
                    <h2><Link to='/form'><Button id='text-cart' className='mx-auto btn-success'>Ir a completar tus datos!</Button></Link></h2>
                </div>
            </div>
        }
    }
    return showCart(cart)
}
