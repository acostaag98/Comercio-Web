import React from 'react';
import {Link} from 'react-router-dom'
import  './CartIcon.css'

export default function CartIcon() {
    return <div id='cart-icon'>
        <Link to='/cart'><button className='btn btn-warning'>
            <i className="fas fa-shopping-cart"> cart</i>
        </button></Link>
    </div>
}