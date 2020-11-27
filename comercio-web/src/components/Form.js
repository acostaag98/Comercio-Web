import React, {Fragment, useState} from 'react';
import * as firebase from 'firebase/app'
import 'firebase/firestore'
import { useCartContext } from '../context/CartContext';
import { getFirestore } from '../firebase';


export default function Form() {
    const {cart} = useCartContext()
    const db = getFirestore();
    const [datos, setDatos] = useState({
        nombre: '',
        direccion: '',
        telefono: '',
        email: '',
    })
    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name] : event.target.value,
        })
    }
    function newOrder() {
        const orders = db.collection('orders');
        const newOrder = {
            buyer: datos,
            items: {cart},
            date: firebase.firestore.FieldValue.serverTimestamp(),

        }
        orders.add(newOrder).then(id => {
            console.log('order created with id:', id);
        })
        alert('Tu pedido ha sido recibido exitosamente!')
    }
    
    return <Fragment>
       
        <h1 className='titleForm'>Formulario del Cliente:</h1>
        <h2 className='titleForm'>Completa con tus datos!</h2>
        <form className='row' onSubmit={newOrder}>
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
                <button id='buttonForm' className='btn btn-success' type='submit'>Checkout !</button>
            </div>
        </form>
    </Fragment>
}