import React, { useEffect, useState } from 'react'
import ItemList from './ItemList.js'
import {getFirestore} from '../firebase';

const productos = [
    {id: 1,title:'Led Zeppelin - Led Zeppelin II', price: 133, image: 'https://http2.mlstatic.com/D_NQ_NP_607507-MLA43256963725_082020-O.jpg', stock: 10, initial: 0},

    {id: 2,title:'The Beatles - Abbey Road', price: 200, image: 'https://mec-s2-p.mlstatic.com/733900-MEC41818301208_052020-O.jpg', stock: 12, initial: 2},

    {id: 3,title:'Metallica - Kill em All', price: 150, image: 'https://http2.mlstatic.com/lp-vinilo-metallica-kill-em-all-megaforce-printed-usa-1983-D_NQ_NP_882111-MCO20493993153_112015-F.jpg', stock: 4, initial: 0},

    {id: 4,title:'Pink Floyd - The Wall', price: 150, image: 'https://i.pinimg.com/originals/c5/90/75/c59075a3234bf3d01521ac0dde22720a.png', stock: 15, initial: 1},

    {id: 5,title:'Michael Jackson - Trhiller', price: 150, image: 'https://cloud10.todocoleccion.online/discos-vinilo/tc/2016/02/09/13/54341812.jpg', stock: 15, initial: 1},

    {id: 6,title:'Faith No More - Angel Dust', price: 150, image: 'https://www.emp-online.es/dw/image/v2/BBQV_PRD/on/demandware.static/-/Sites-master-emp/default/dwdd8adc01/images/3/1/8/4/318496-emp.jpg?sw=1000&sh=800&sm=fit&sfrm=png', stock: 15, initial: 1},

    {id: 7,title:'GNR - Use Your Ilussion I', price: 150, image: 'https://http2.mlstatic.com/D_NQ_NP_832671-MLA42884671744_072020-O.jpg', stock: 15, initial: 1},

    {id: 8,title:'GNR - Use Your Ilussion II', price: 150, image: 'https://rocknvivo.com/wp-content/uploads/2017/09/gunsnroses-useyourillusionII-770x513.jpg', stock: 15, initial: 1},

    {id: 9,title:'Eric Clapton - Unplugged', price: 150, image: 'https://http2.mlstatic.com/eric-clapton-unplugged-lp-doble-sellado-nuevo-D_NQ_NP_764563-MCO43442704701_092020-F.jpg', stock: 15, initial: 1},

    {id: 10,title:'Pearl Jam - Ten', price: 150, image: 'https://http2.mlstatic.com/pearl-jam-ten-vinilo-lp-acetato-D_NQ_NP_932737-MEC31111932034_062019-F.jpg', stock: 15, initial: 1},

    {id: 11,title:'RHCP - Californication', price: 150, image: 'https://i.pinimg.com/originals/cc/a8/ff/cca8ffe13f46b285dde52474e13a23ea.jpg', stock: 15, initial: 1},

    {id: 12,title:'Rolling Stones - Let It Bleed', price: 150, image: 'https://cdn.shopify.com/s/files/1/0024/9803/5810/products/365492-Product-0-I_df2c437a-152c-42be-8a95-1b4c779b3ef8_large.jpg', stock: 15, initial: 1},

    {id: 13,title:'The Black Crowes - Shake You Money Braker', price: 150, image: 'https://i.ebayimg.com/images/g/C8sAAOSwUpFcR6Bn/s-l300.jpg', stock: 15, initial: 1},

    {id: 14,title:'Aerosmith - Permanent Vacation', price: 150, image: 'https://www.republikarecords.com/wp-content/uploads/2019/04/Aerosmith-Permanent-Vacation--400x254.png', stock: 15, initial: 1},

    {id: 15,title:'Tame Impala - The Slow Rush', price: 150, image: 'https://http2.mlstatic.com/D_NQ_NP_602974-MLA40764594535_022020-O.jpg', stock: 15, initial: 1},

    {id: 16,title:'Stone Temple Pilots - Core', price: 150, image: 'https://http2.mlstatic.com/D_NQ_NP_749286-MLA26133626200_102017-O.jpg', stock: 15, initial: 1},

    {id: 17,title:'Arctic Monkeys - AM', price: 123, image: 'https://www.tercer-ojo.pe/fotos/artic-monkeys-am-discos-vinilo-venta-tocadiscos-tornamesas-crosley-technics-rega-tercer-ojo-miraflores-lima-peru-phantom-music.jpg', stock: 15, initial: 1},

    {id: 18,title:'AC/DC - Black in Black', price: 150, image: 'https://images-na.ssl-images-amazon.com/images/I/31RcWmlTTzL._SY400_.jpg', stock: 15, initial: 1},

    {id: 19,title:'Van Halen - Van Halen', price: 150, image: 'https://www.emp-online.es/dw/image/v2/BBQV_PRD/on/demandware.static/-/Sites-master-emp/default/dwa3eeb269/images/3/1/1/5/311556-emp.jpg?sw=1000&sh=800&sm=fit&sfrm=png', stock: 15, initial: 1},

    {id: 20,title:'SRV - Texas Flood', price: 150, image: 'https://http2.mlstatic.com/D_NQ_NP_738420-MLA28581398625_112018-O.jpg', stock: 15, initial: 1},
    
    {id: 21,title:'Jimi Hendrix - Are You Experienced', price: 150, image: 'https://http2.mlstatic.com/D_NQ_NP_875173-MLA25546221805_042017-O.jpg', stock: 15, initial: 1},

    
]



   



function ItemListContainer() {
    const [productos, setProductos] = useState([])
    useEffect(() => {
        const db = getFirestore();
        const itemCollection = db.collection('items');
        itemCollection.get().then((querySnapshot) => {
            if(querySnapshot.size == 0) {
                alert('no results')
            }
            setProductos(querySnapshot.docs.map(doc => ({id: doc.id, ...doc.data()})))
        });
        
    }, []);
    return <ItemList item={productos}/>
}
export default ItemListContainer;