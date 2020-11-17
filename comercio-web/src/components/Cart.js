import React from 'react';
import { useCartContext } from '../context/CartContext';

export default function Cart() {
    const {cart} = useCartContext()
    return <div>{cart}</div>
}
