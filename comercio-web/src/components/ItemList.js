import React from 'react';
import { Card } from 'react-bootstrap';
import ItemCount from './ItemCount.js'

const ItemList = () => {

    function onAdd(clicks){
        alert(clicks)
        return <ItemCount onAdd={onAdd}/>
    } 
    
    const cardInfo = [
        {image: 'https://static.thenounproject.com/png/1375593-200.png', title: 'Producto 1', text: 'Descripción del producto: ..', text2: 'Precio: $123',},
        {image: 'https://static.thenounproject.com/png/1375593-200.png', title: 'Producto 2', text: 'Descripción del producto: ..', text2: 'Precio: $123'},
        {image: 'https://static.thenounproject.com/png/1375593-200.png', title: 'Producto 3', text: 'Descripción del producto: ..', text2: 'Precio: $123'},
        {image: 'https://static.thenounproject.com/png/1375593-200.png', title: 'Producto 4', text: 'Descripción del producto: ..', text2: 'Precio: $123'},
        {image: 'https://static.thenounproject.com/png/1375593-200.png', title: 'Producto 5', text: 'Descripción del producto: ..', text2: 'Precio: $123'},
        {image: 'https://static.thenounproject.com/png/1375593-200.png', title: 'Producto 6', text: 'Descripción del producto: ..', text2: 'Precio: $123'},
        {image: 'https://static.thenounproject.com/png/1375593-200.png', title: 'Producto 7', text: 'Descripción del producto: ..', text2: 'Precio: $123'},
        {image: 'https://static.thenounproject.com/png/1375593-200.png', title: 'Producto 8', text: 'Descripción del producto: ..', text2: 'Precio: $123'},
        {image: 'https://static.thenounproject.com/png/1375593-200.png', title: 'Producto 9', text: 'Descripción del producto: ..', text2: 'Precio: $123'},
        {image: 'https://static.thenounproject.com/png/1375593-200.png', title: 'Producto 10', text: 'Descripción del producto: ..', text2: 'Precio: $123'},
        {image: 'https://static.thenounproject.com/png/1375593-200.png', title: 'Producto 11', text: 'Descripción del producto: ..', text2: 'Precio: $123'},
        {image: 'https://static.thenounproject.com/png/1375593-200.png', title: 'Producto 12', text: 'Descripción del producto: ..', text2: 'Precio: $123'},
        {image: 'https://static.thenounproject.com/png/1375593-200.png', title: 'Producto 13', text: 'Descripción del producto: ..', text2: 'Precio: $123'},
        {image: 'https://static.thenounproject.com/png/1375593-200.png', title: 'Producto 14', text: 'Descripción del producto: ..', text2: 'Precio: $123'},


    ]
    
    const renderCard = (card, index) => {
        return (
            <Card style={{ width: '18rem', display: 'inline-block', margin: '2px'}} key={index} className='box'>
            <Card.Img variant="top" src={card.image} />
            <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>
                    {card.text}
                </Card.Text>
                <Card.Text> 
                    {card.text2}
                </Card.Text>
                <ItemCount stock={10} initial= {0} onAdd={onAdd} />
            </Card.Body>
        </Card>
        )
    }
    
    return <div className='App'>
        {cardInfo.map(renderCard)}
    </div>
}
export default ItemList