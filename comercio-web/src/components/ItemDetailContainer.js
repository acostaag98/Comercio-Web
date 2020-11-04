import React, { useEffect, useState } from 'react'
import ItemCount from './ItemCount.js'
import ItemDetail from './ItemDetail.js'
import ItemDetailList from './ItemDetailList.js'

const productos = [
    {id: 1, title:'Producto 1', text:'Descripcion del producto: ..', text2:'Precio: $123', image: 'https://static.thenounproject.com/png/1375593-200.png', stock: 12, initial: 0},
    {id: 2, title:'Producto 2', text:'Descripcion del producto: ..', text2:'Precio: $123', image: 'https://static.thenounproject.com/png/1375593-200.png', stock: 11, initial: 2},
    {id: 3, title:'Producto 3', text:'Descripcion del producto: ..', text2:'Precio: $123', image: 'https://static.thenounproject.com/png/1375593-200.png', stock: 4, initial: 0},
    {id: 4, title:'Producto 4', text:'Descripcion del producto: ..', text2:'Precio: $123', image: 'https://static.thenounproject.com/png/1375593-200.png', stock: 15, initial: 1},
    
]
const itemParaMostrar = productos.filter(productos => productos.id == 1) [0]

const getItemDetail = new Promise((resolve, rejected) => {
    setTimeout(() => {
        resolve(itemParaMostrar)
    }, 3000)
})
function ItemDetailContainer() {
    const [productos, setProductos] = useState([])
    useEffect(() => {
        getItemDetail.then(res => {
            setProductos(res)
        }, err => {
            console.log(err)
        })
    }, []);
    return <ItemDetailList item={productos}/>

}
export default ItemDetailContainer