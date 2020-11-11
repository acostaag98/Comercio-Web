import React from 'react';
import { Card } from 'react-bootstrap';
import ItemCount from './ItemCount';
import './estilos.css'

export default function ItemDetail({ title, price, image, text, stock, initial, onAdd }) {
    return <div id='card'>
        <Card  style={{ width: '18rem', margin: '2px' }} className='card border-dark mb-3 box center'>
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
            <ItemCount stock={stock} initial={initial} onAdd={onAdd} />
        </Card>
    </div>


}


