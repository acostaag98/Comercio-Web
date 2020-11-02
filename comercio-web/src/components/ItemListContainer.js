import React, { useEffect, useState } from 'react'
import ItemList from './ItemList.js'

const productos = [
    {title:'Producto 1', text:'Descripcion del producto: ..', text2:'Precio: $123', image: 'https://static.thenounproject.com/png/1375593-200.png', stock: 10, initial: 0},
    {title:'Producto 2', text:'Descripcion del producto: ..', text2:'Precio: $123', image: 'https://static.thenounproject.com/png/1375593-200.png', stock: 12, initial: 2},
    {title:'Producto 3', text:'Descripcion del producto: ..', text2:'Precio: $123', image: 'https://static.thenounproject.com/png/1375593-200.png', stock: 4, initial: 0},
    {title:'Producto 4', text:'Descripcion del producto: ..', text2:'Precio: $123', image: 'https://static.thenounproject.com/png/1375593-200.png', stock: 15, initial: 1},
    
]


const itemTask = new Promise((resolve, reject) => {
    setTimeout(() => {
           resolve(productos)
       }, 2000)
   

});

function ItemListContainer() {
    const [productos, setProductos] = useState([])
    useEffect(() => {
        itemTask.then(res => {
            setProductos(res)
        }, err => {
            console.log('Rejected' + err)
        })
    }, []);
    return <ItemList item={productos}/>
}
export default ItemListContainer;