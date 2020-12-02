import React from 'react';
import { Link } from 'react-router-dom'
import './estilos.css'

export default function Inicio({ title, price, imageId, id }) {
    return <div className='containerr'>
    <img src='https://1035thearrow.com/wp-content/uploads/sites/11/2020/02/GettyImages-1124622103.jpg' alt='Snow' style={{ width: '100%' }}></img>
    <Link to='/home'><button className='btn'>Ingresar</button></Link>
    </div>

}