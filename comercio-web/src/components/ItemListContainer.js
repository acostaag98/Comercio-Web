import React, { useEffect, useState, useParams } from 'react'
import ItemList from './ItemList.js'
import {getFirestore} from '../firebase';

function ItemListContainer() {
    const [productos, setProductos] = useState([]);
    const {category} = useParams()
    useEffect(() => {
        const db = getFirestore();
        const itemCollection = db.collection('items');
        const ofertas = itemCollection.where('category', '==', 'oferta')
        if (category === undefined) {
            itemCollection.get().then((querySnapshot) => {
                if(querySnapshot.size === 0) {
                    console.log('no results')
                }
                setProductos(querySnapshot.docs.map(doc => ({id: doc.id, ...doc.data()})))
            });
        }
        else{ 
            ofertas.get().then((querySnapshot) => {
                if(querySnapshot.size === 0) {
                    console.log('no results')
                }
                setProductos(querySnapshot.docs.map(doc => ({id: doc.id, ...doc.data()})))
            });
        }
    }, []);
    return <ItemList item={productos}/>
}
export default ItemListContainer;
