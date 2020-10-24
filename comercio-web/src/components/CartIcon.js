import React from 'react';
import  './CartIcon.css'

export default function CartIcon() {
    return <div id='cart-icon'>
        <button className='btn btn-warning'>
            <i className="fas fa-shopping-cart"> cart</i>
        </button>
    </div>
}