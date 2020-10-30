import React, { useEffect, useState } from 'react'
import ItemList from './ItemList.js'

const itemTask = new Promise((resolve, reject) => {
    setTimeout(() => {
           resolve(<ItemList />)
       }, 2000)
   

});

function ItemListContainer() {
    const [item, setItem] = useState([])
    useEffect(() => {
        itemTask.then(res => {res}, err => {
            console.log('Rejected' + err)
        })
    }, []);
}
export default ItemListContainer;