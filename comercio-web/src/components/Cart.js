import React from 'react';
import { useCartContext } from '../context/CartContext';
import { Link } from 'react-router-dom'
import './estilos.css'



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
                    <td><img src='' /> </td>
                    <td>{item.title}</td>
                    <td>In stock</td>
                    <td><input class="form-control" type="text" />{item.cantidad}</td>
                    <td class="text-right">{item.price}</td>
                    <td class="text-right"><button onClick={() => remove(item.id)} class="btn btn-sm btn-danger"><i class="fa fa-trash"></i> </button> </td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>Sub-Total</td>
                    <td class="text-right">{item.price * item.cantidad}</td>
                </tr>
            </div>
        ))
    }
    function showCart(cart) {
        if (cart.length === 0) {
            return <Link to='/home'><button className='mx-auto'>Go to Shop!</button></Link>
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
                                        <th scope="col">Product</th>
                                        <th scope="col">Available</th>
                                        <th scope="col" class="text-center">Quantity</th>
                                        <th scope="col" class="text-right">Price</th>
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
                                        <td><strong>Total</strong></td>
                                        <td class="text-right"><strong>{calcularTotal(cart)}</strong></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        }
    }
    return showCart()
}
