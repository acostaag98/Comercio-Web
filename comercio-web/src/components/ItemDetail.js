import React from 'react';
import { Card } from 'react-bootstrap';
import { AccordionTitle } from 'semantic-ui-react';
import ItemCount from './ItemCount';

export default function ItemDetail({title, text, text2, image, stock, initial, onAdd}) {
    return <Card style={{ width: '18rem', margin: '2px'}} className='box'>
    <Card.Img variant="top" src={image} />
    <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
            {text}
        </Card.Text>
        <Card.Text> 
        Opciones de pago: Crédito y debito 
        </Card.Text>
        <Card.Text>
            {text2}
        </Card.Text>
    </Card.Body>
    <ItemCount stock={stock} initial={initial} onAdd={onAdd}/>
</Card>
}



