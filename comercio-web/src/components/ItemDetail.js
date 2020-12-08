import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom'
import './estilos.css'
import { useCartContext } from '../context/CartContext';



export default function ItemDetail({ id, title, price, image, description, stock, initial, imageId }) {
    const [button, setButton] = useState(true)
    const [cantidad, setCantidad] = useState(null)
    const { add } = useCartContext()

    function onAdd(clicks) {
        setCantidad(clicks)
        setButton(false)
        const itemParaAgregar = { id: id, title: title, price: price, cantidad: clicks, imageId: imageId }
        add(itemParaAgregar)

    }

    function toggleButton() {
        if (button === true) {
            return <ItemCount stock={stock} initial={initial} onAdd={onAdd} />
        }
        if (button === false) {
            return <Link to='/cart'><button className='buttonGoCart' id='button-cart'>Ir al Carrito! ({cantidad})</button></Link>
        }
    }

    if (!id) {
        return <div>
             <h1>Producto no encontrado</h1>
            <Link to='/home'><button id='buttonForm' className='btn btn-primary'>Go Home!</button></Link>
            </div>
    }
    else {
        return <div>
            <div id='card'>
                <Card style={{ width: '22rem', margin: '5px' }} className='card border-dark mb-3 box '>
                    <Card.Img variant="top" src={imageId} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text id='nav-text'>
                            {description}
                        </Card.Text>
                        <Card.Text id='text-price'>
                        </Card.Text>
                    Precio: ${price}
                    </Card.Body>
                </Card>
            </div>
            <div className='containerCount'>
                {toggleButton()}
            </div>
            <div className='descriptionCard'>
                <a href={description} target='_blank' rel="noopener noreferrer"><button className='btn btn-warning'> Descripción del producto </button></a>
            </div>
        </div>
    }
}