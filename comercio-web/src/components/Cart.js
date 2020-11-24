import React from 'react';
import { useCartContext } from '../context/CartContext';
import { Link } from 'react-router-dom'
import './estilos.css'
import { Button } from 'react-bootstrap';



export default function Cart() {
    const { cart, remove } = useCartContext()   
    function calcularTotal(cart) {
        let acc = 0
        for (let i = 0; i < cart.length; i++){
            acc += cart[i].cantidad * cart[i].price;
       }
       return acc
    }
    function mostrarItems() {
        return cart.map(item => (
            <div className='mx-auto'>
                <tr>
                    <td><img id='cart-image' src={item.image} /> </td>
                    <td id='text-cart'>{item.title}</td>
                    <td id='text-cart'>In stock</td>
                    <td id='text-cart'><input class="form-control" type="text" />{item.cantidad}</td>
                    <td id='text-cart' class="text-right">${item.price}</td>
                    <td id='text-cart' class="text-right"><button onClick={() => remove(item.id)} class="btn btn-sm btn-danger"><i class="fa fa-trash"></i> </button> </td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td id='text-cart'>Sub-Total</td>
                    <td id='text-cart' class="text-right">${item.price * item.cantidad}</td>
                </tr>
            </div>
        ))
    }
    function showCart(cart) {
        if (cart.length === 0) {
            return <Link to='/'><Button className='mx-auto'>Go to Shop!</Button></Link>
        }
        else {
            return <div class="container mb-4">
                <div class="row">
                    <div class="col-12">
                        <div class="table-responsive">
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col"> </th>
                                        <th id='text-cart' scope="col">Product</th>
                                        <th id='text-cart' scope="col">Available</th>
                                        <th id='text-cart' scope="col" class="text-center">Quantity</th>
                                        <th id='text-cart' scope="col" class="text-right">Price</th>
                                        <th> </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <div>
                                        {mostrarItems()}
                                    </div>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td id='text-cart'><strong>Total</strong></td>
                                        <td id='text-cart' class="text-right"><strong>${calcularTotal(cart)}</strong></td>
                                        <Button id='text-cart' className='mx-auto btn-success'>Checkout</Button>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        }
    }
    return showCart(cart)
}
