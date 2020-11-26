import React, { useEffect, useState }from 'react';
import ItemList from './ItemList.js';
import {getFirestore} from '../firebase';

function Ofertas() {
    const [productos, setProductos] = useState([])
    useEffect(() => {
        const db = getFirestore();
        const itemCollection = db.collection('items');
        const ofertas = itemCollection.where('category', '==', 'oferta')
        ofertas.get().then((querySnapshot) => {
            if(querySnapshot.size === 0) {
                console.log('no results')
            }
            setProductos(querySnapshot.docs.map(doc => ({id: doc.id, ...doc.data()})))
        });
        
    }, []);
    return <ItemList item={productos}/>
}
export default Ofertas;
