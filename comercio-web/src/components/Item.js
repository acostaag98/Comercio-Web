import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import './estilos.css'

export default function Item({ title, price, imageId, id }) {
    return <Card style={{ width: '18rem', display: 'inline-block', margin: '2px' }} className='box'>
        <Card.Img className='imgCard' variant="top" src={imageId} />
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
                Precio: ${price}
            </Card.Text>
        </Card.Body>
        <Link to={`/item/${id}`}><Button id='button-detail'>Ver detalle del Producto</Button></Link>
</Card>

}