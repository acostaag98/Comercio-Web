import React from 'react';
import { useCartContext } from '../context/CartContext';
import { Card } from 'react-bootstrap';
import './estilos.css'
import { Button } from 'semantic-ui-react';

export default function Cart(item) {
    const {cart, remove} = useCartContext()
    return cart.map(item => (
        <div id='name-logo'>
            <Card  style={{ width: '18rem', margin: '2px'}} className='card border-dark mb-3 box center'>
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text id='nav-text'>
                    Cantidad: {item.cantidad}
                </Card.Text>
                <Card.Text id='text-price'>
                </Card.Text>
                    Precio: ${item.price * item.cantidad}
            </Card.Body>
            <Button onClick={remove}>Remove</Button>
        </Card>
        </div>
    ))
}
