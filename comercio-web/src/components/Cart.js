import React from 'react';
import { useCartContext } from '../context/CartContext';
import { Link } from 'react-router-dom'
import './estilos.css'
import { Button } from 'react-bootstrap';




export default function Cart() {
    const { cart, remove } = useCartContext()
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
    function showCart(cart) {
        if (cart.length === 0) {
            return <div className='containerr'>
                <img src='https://1035thearrow.com/wp-content/uploads/sites/11/2020/02/GettyImages-1124622103.jpg' alt='Snow' style={{ width: '100%' }}></img>
                <Link to='/'><button className='btn'>Ir a comprar !</button></Link>
            </div>

        }
        else {
            return <div>
                <div>
                    <h1 className='titleCart'>Tu carrito: </h1>
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
