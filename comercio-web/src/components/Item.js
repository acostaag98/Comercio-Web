import React from 'react';
import { Card, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'

export default function Item({title, text, image, id}) {
    return <Card style={{ width: '18rem', display: 'inline-block', margin: '2px'}} className='box'>
    <Card.Img variant="top" src={image} />
    <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
            {text}
        </Card.Text>
    </Card.Body>
    <Link to={`item/${id}`}><Button>Ver detalle del Producto</Button></Link>
</Card>
}