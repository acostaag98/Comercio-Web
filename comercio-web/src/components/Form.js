import React, { Fragment, useState } from 'react';
import * as firebase from 'firebase/app'
import 'firebase/firestore'
import { useCartContext } from '../context/CartContext';
import { getFirestore } from '../firebase';
import { Link } from 'react-router-dom'




export default function Form() {
    const { cart, calcularTotal, mostrarDetallePedido } = useCartContext()
    const db = getFirestore();
    const [button, setButton] = useState(true)
    const [email, setEmail] = useState(false)
    const [datos, setDatos] = useState({
        nombre: '',
        direccion: '',
        telefono: '',
        email: '',
        email2: '',
    })
    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name]: event.target.value,

        })
    }
    function BtnDisabled(datos) {
        if(datos.email === datos.email2) {
            setEmail(true)
            return email
        }
        if (email === true) {
            return <button id='buttonForm' className='btn btn-success' onClick={newOrder}>Comprar </button>
        }
    }
    async function newOrder(event) {
        event.preventDefault();
        setButton(false)
        const orders = db.collection('orders');
        const newOrder = {
            buyer: datos,
            items: cart,
            date: firebase.firestore.FieldValue.serverTimestamp(),
            total: calcularTotal(cart)

        }
        try {
            const doc = await orders.add(newOrder)
            console.log('Orden creada con el id: ', doc.id)
            alert(`Su compra ha sido realizada con exito, su id es: ${doc.id}`)
        } catch (err) {
            console.log(err)
        }
    }

    if (button === true) {
        return <Fragment>
            <div className='detallePedido'>
                <h1>Detalle del pedido: </h1>
                {mostrarDetallePedido()}
                <div className='checkout'>
                    Total: ${calcularTotal(cart)}
                </div>
            </div>
            <div className='formularioPedido'>
                <h1 className='titleForm'>Formulario del Cliente:  Completa con tus datos!</h1>
                <form className='row'>
                    <div id='form' className='col-md-3'>
                        <input
                            placeholder='Ingrese nombre y apellido'
                            className='form-control'
                            type='text'
                            name='nombre'
                            onChange={handleInputChange}
                        ></input>
                        <p></p>
                        <input
                            placeholder='Ingrese dirección'
                            className='form-control'
                            type='text'
                            name='direccion'
                            onChange={handleInputChange}
                        ></input>
                        <p></p>
                        <input
                            placeholder='Ingrese número de telefono'
                            className='form-control'
                            type='number'
                            name='telefono'
                            onChange={handleInputChange}
                        ></input>
                        <p></p>
                        <input
                            placeholder='Ingrese e-mail'
                            className='form-control'
                            type='text'
                            name='email'
                            onChange={handleInputChange}
                        ></input>
                        <p></p>
                        <input
                            placeholder='Repita su e-mail'
                            className='form-control'
                            type='text'
                            name='email2'
                            onChange={handleInputChange}
                        ></input>
                        <p></p>
                        {BtnDisabled(datos)}
                    </div>
                </form>
            </div>
        </Fragment>
    }
    else {
        return <div className='containerr'>
            <img src='https://www.relato.gt/wp-content/uploads/2020/06/2fd08c5746404642.jpg' alt='Snow' style={{ width: '100%' }}></img>
            <Link to='/home'><button className='btn'>Go home !</button></Link>
        </div>
    }
}