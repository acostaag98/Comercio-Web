import React, { useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
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
    }, [category]);
    return <div className='itemListContainer'>
        <ItemList item={productos}/>
    </div>
}
export default ItemListContainer;
