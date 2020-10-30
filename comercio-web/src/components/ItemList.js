import React from 'react';
import Item from './Item'
import ItemCount from './ItemCount'

export default function ItemList() {
    function onAdd(clicks){
        alert(clicks)
        return <ItemCount onAdd={onAdd}/>
    } 
    return <div>
        <Item title='Producto 1' text='Descripcion del producto: ..' text2='Precio: $123' image= 'https://static.thenounproject.com/png/1375593-200.png'  stock={10} initial={0}/>
        <Item title='Producto 2' text='Descripcion del producto: ..' text2='Precio: $123' image= 'https://static.thenounproject.com/png/1375593-200.png' stock={12} initial={2}/>
        <Item title='Producto 3' text='Descripcion del producto: ..' text2='Precio: $123' image= 'https://static.thenounproject.com/png/1375593-200.png' stock={3} initial={1}/>
        <Item title='Producto 4' text='Descripcion del producto: ..' text2='Precio: $123' image= 'https://static.thenounproject.com/png/1375593-200.png' stock={4} initial={0}/>
    </div>
}