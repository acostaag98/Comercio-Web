import React, {useState} from 'react';
import { Card } from 'react-bootstrap';
import ItemCount from './ItemCount';
import {Link} from 'react-router-dom'
import './estilos.css'
import { useCartContext } from '../context/CartContext';



export default function ItemDetail({ id, title, price, image, description, stock, initial, imageId}) {
    const [button, setButton] = useState(true)
    const [cantidad, setCantidad] = useState(null)
    const {add} = useCartContext()
    
    function onAdd(clicks){
        setCantidad(clicks)
        setButton(false)
        const itemParaAgregar = {id: id, title: title, price: price, cantidad: clicks, imageId: imageId}
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
    
    return <div>
        <div id='card'>
        <Card  style={{ width: '18rem', margin: '2px' }} className='card border-dark mb-3 box '>
            <Card.Img variant="top" src={imageId} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text id='nav-text'>
                    {description}
                </Card.Text>
                <Card.Text id='nav-text'>
                    Opciones de pago: Crédito y debito
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
    </div>
    }