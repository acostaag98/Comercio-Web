import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import './estilos.css'

export default function Item({ title, price, imageId, id }) {
    return <Card style={{ width: '18rem', display: 'inline-block', margin: '2px' }} className='box'>
        <Card.Img variant="top" src={imageId} />
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text id='nav-text'>
                Precio: ${price}
            </Card.Text>
        </Card.Body>
        <Link to={`item/${id}`}><Button id='button-detail' className='border-dark'>Ver detalle del Producto</Button></Link>
</Card>

}