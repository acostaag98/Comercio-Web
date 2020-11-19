import React from 'react';
import ItemDetail from './ItemDetail'


export default function ItemDetailList(props) {
    const producto = props.item
    return <ItemDetail id={producto.id} title={producto.title} text={producto.text} price={producto.price} image={producto.image} stock= {producto.stock} initial={producto.initial} onAdd={producto.onAdd}/>
}