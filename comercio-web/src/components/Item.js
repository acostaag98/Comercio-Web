import React from 'react';
import { Card, Button } from 'react-bootstrap';

export default function Item({title, text, image}) {
    return <Card style={{ width: '18rem', display: 'inline-block', margin: '2px'}} className='box'>
    <Card.Img variant="top" src={image} />
    <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
            {text}
        </Card.Text>
    </Card.Body>
    <Button>Ver detalle del Producto</Button>
</Card>
}