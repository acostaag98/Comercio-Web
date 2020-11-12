import React, {useEffect, useState} from 'react'
import {Icon} from 'semantic-ui-react'
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import './estilos.css'


export default function ItemCount({stock, initial, onAdd}) {
    const [clicks, setClicks] = useState(initial)
    const [button, setButton] = useState(true)
    useEffect(() => setClicks(initial), [initial])
    function sumar(){
        if (clicks === stock) {
            alert('no hay mas stock')
        }
        else {
            setClicks(clicks + 1)
        }
    }
    function restar(){
        if (clicks !== initial){
            setClicks(clicks - 1)
        }
        return clicks
    }
    function onAdd(clicks){
        alert(`Se agregó tu pedido (${clicks}) correctamente a tu carrito!`)
        setButton(false)
    } 
    function ShowAndHide() {
        if (button === true){
            return <div>
            <h1>{clicks}</h1>
            <Button id='button-detail-count' className='border-dark' variant='primary' onClick={restar}><Icon name='minus'/></Button>
            <Button id='button-detail-count' className='border-dark' variant='primary' onClick={sumar}><Icon name='plus'/></Button>
            <Button id='button-detail-count' className='border-dark' onClick={() => {onAdd(clicks)}}>Comprar</Button>
        </div>
        }
        if (button === false) {
           return <Link to='/cart'><Button id='button-cart'>Ir al Carrito!</Button></Link>
        }
    }
    return ShowAndHide()
}
