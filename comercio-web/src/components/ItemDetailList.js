import React from 'react';
import ItemDetail from './ItemDetail'


export default function ItemDetailList(props) {
    const producto = props.item
    return <ItemDetail id={producto.id} title={producto.title} description={producto.description} price={producto.price} imageId={producto.imageId} stock= {producto.stock} initial={producto.initial} onAdd={producto.onAdd}/>
}