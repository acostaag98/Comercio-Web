import React from 'react';
import Item from './Item'


export default function ItemList(props) {
    const productos = props.item
    return productos.map((item, index) => (
        <Item title={item.title} price={item.price} imageId={item.imageId} stock={item.stock} inital={item.inital} id={item.id}/>
    ))
}