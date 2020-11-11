import React from 'react';
import ItemDetail from './ItemDetail'


export default function ItemDetailList(props) {
    const productos = props.item
    return <ItemDetail title={productos.title} text={productos.text} price={productos.price} image={productos.image} stock= {productos.stock} initial={productos.initial} onAdd={productos.onAdd}/>
}