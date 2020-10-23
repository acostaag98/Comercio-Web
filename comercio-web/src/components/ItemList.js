import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ItemList = () => {
    const cardInfo = [
        {image: 'https://static.thenounproject.com/png/1375593-200.png', title: 'Producto 1', text: 'Descripción del producto: ..', text2: 'Precio: $123'},
        {image: 'https://static.thenounproject.com/png/1375593-200.png', title: 'Producto 2', text: 'Descripción del producto: ..', text2: 'Precio: $123'},
        {image: 'https://static.thenounproject.com/png/1375593-200.png', title: 'Producto 3', text: 'Descripción del producto: ..', text2: 'Precio: $123'},
        {image: 'https://static.thenounproject.com/png/1375593-200.png', title: 'Producto 4', text: 'Descripción del producto: ..', text2: 'Precio: $123'},


    ]

    const renderCard = (card, index) => {
        return (
            <Card style={{ width: '18rem' }} key={index} className='box'>
            <Card.Img variant="top" src={card.image} />
            <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>
                    {card.text}
                </Card.Text>
                <Card.Text>
                    {card.text2}
                </Card.Text>
                <Button variant="primary">Add to Cart</Button>
            </Card.Body>
        </Card>
        )
    }
    
    return <div className='App'>
        {cardInfo.map(renderCard)}
    </div>
}
export default ItemList