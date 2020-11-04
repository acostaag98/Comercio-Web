import React from 'react';
import ItemDetail from './ItemDetail'
import ItemCount from './ItemCount'

export default function ItemDetailList(props) {
    const productos = props.item
    function onAdd(clicks){
        alert(clicks)
        return <ItemCount onAdd={onAdd}/>
    } 
    return <ItemDetail title={productos.title} text={productos.text} text2={productos.text2} image={productos.image} stock= {productos.stock} inital={productos.inital} onAdd={onAdd}/>
}