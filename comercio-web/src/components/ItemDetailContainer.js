import React, { useEffect, useState } from 'react'
import ItemDetailList from './ItemDetailList.js'
import {useParams} from 'react-router-dom'
import {getFirestore} from '../firebase';

function ItemDetailContainer() {
    const [productos, setProductos] = useState([]);
    const {id} = useParams()
    useEffect(() => {
        const db = getFirestore();
        const itemCollection = db.collection('items');
        const item = itemCollection.doc(id)
        item.get().then((doc) => {
            if(!doc.exists) {
                console.log('Item no existe')
                return;
            }
            console.log('Item encontrado')
            setProductos({id: doc.id, ...doc.data()})
        }).catch((error) => {
            console.log(error)
        })
    }, []);
    return <ItemDetailList item={productos}/>

}
export default ItemDetailContainer