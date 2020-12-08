import React, {Fragment, useState} from 'react';
import * as firebase from 'firebase/app'
import 'firebase/firestore'
import { useCartContext } from '../context/CartContext';
import { getFirestore } from '../firebase';
import { Link } from 'react-router-dom'




export default function Form() {
    const {cart, calcularTotal} = useCartContext()
    const db = getFirestore();
    const [button, setButton] = useState(true)
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
        try {const doc = await orders.add(newOrder)
        console.log('Orden creada con el id: ', doc.id)
        alert('Compra realizada, su id es: ', doc.id)
        } catch (err) {
            console.log(err)
        }
    }
    
    if (button === true) {
        return <Fragment>
       
        <h1 className='titleForm'>Formulario del Cliente:</h1>
        <h2 className='titleForm'>Completa con tus datos!</h2>
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
                    name='email'
                    onChange={handleInputChange}
                ></input>
                <p></p>
                <button id='buttonForm' className='btn btn-success' onClick={newOrder}>Comprar </button>
            </div>
        </form>
    </Fragment>
    }
    else {
        return <Link to='/'><button id='buttonForm' className='btn btn-primary'>Go Home!</button></Link>
    }
}