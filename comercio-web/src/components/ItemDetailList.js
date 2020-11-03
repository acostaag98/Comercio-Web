import React from 'react';
import ItemDetail from './ItemDetail'
import ItemCount from './ItemCount'

export default function ItemDetailList(props) {
    const productos = props.item
    function onAdd(clicks){
        alert(clicks)
        return <ItemCount onAdd={onAdd}/>
    } 
    return productos.map((item, index) => (
        <ItemDetail title={item.title} text={item.text} text2={item.text2} image={item.image} stock={item.stock} inital={item.inital}/>
    ))  
}