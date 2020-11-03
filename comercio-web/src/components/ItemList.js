import React from 'react';
import Item from './Item'


export default function ItemList(props) {
    const productos = props.item
    return productos.map((item, index) => (
        <Item title={item.title} text={item.text} image={item.image} stock={item.stock} inital={item.inital}/>
    ))
}