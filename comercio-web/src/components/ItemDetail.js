import React, {useState} from 'react';
import { Card } from 'react-bootstrap';
import ItemCount from './ItemCount';
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import './estilos.css'
import { useCartContext } from '../context/CartContext';



export default function ItemDetail({ id, title, price, image, text, stock, initial}) {
    const [button, setButton] = useState(true)
    const [cantidad, setCantidad] = useState(null)
    const {add} = useCartContext()
    function onAdd(clicks){
        alert(`Se agregó tu pedido (${clicks}) correctamente a tu carrito!`)
        setCantidad(clicks)
        setButton(false)
        const itemParaAgregar = {id: id, title: title, price: price, cantidad: clicks, image: image}
        add(itemParaAgregar)

    } 
    function toggleButton() {
        if (button === true) {
            return <ItemCount stock={stock} initial={initial} onAdd={onAdd} />
        }
        if (button === false) {
            return <Link to='/cart'><Button className='mx-auto' id='button-cart'>Ir al Carrito! ({cantidad})</Button></Link>
        }
    }
    return <div id='card'>
        <Card  style={{ width: '18rem', margin: '2px' }} className='card border-dark mb-3 box center mx-auto'>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text id='nav-text'>
                    {text}
                </Card.Text>
                <Card.Text id='nav-text'>
                    Opciones de pago: Crédito y debito
                </Card.Text>
                <Card.Text id='text-price'>
                </Card.Text>
                    Precio: ${price}
            </Card.Body>
            {toggleButton()}
        </Card>
    </div>
    }