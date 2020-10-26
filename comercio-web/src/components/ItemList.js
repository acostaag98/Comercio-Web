import React, {useState} from 'react';
import { Card, Button } from 'react-bootstrap';
import {Icon} from 'semantic-ui-react'

const ItemList = () => {

    
    const cardInfo = [
        {image: 'https://static.thenounproject.com/png/1375593-200.png', title: 'Producto 1', text: 'Descripción del producto: ..', text2: 'Precio: $123'},
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

    function ItemCount(stock, initial) {
        const [clicks, setClicks] = useState(0)
        function onAdd() {
            //alguna logica que me lleve la cantidad de clicks al boton del Navbar
        }
        return <div>
            <h1>{clicks}</h1>
            <Button  variant='primary' onClick={()=>{
                setClicks(clicks - 1)
            }}><Icon name='minus'/></Button>
            <Button variant='primary' onClick={()=>{
                setClicks(clicks + 1)
            }}><Icon name='plus'/></Button>
            <Button onClick={() => {onAdd(clicks)}}>Add to cart</Button>
        </div>

    }
 
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
                <ItemCount/>
            </Card.Body>
        </Card>
        )
    }
    
    return <div className='App'>
        {cardInfo.map(renderCard)}
    </div>
}
export default ItemList