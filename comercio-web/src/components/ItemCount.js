import React, {useEffect, useState} from 'react'
import {Icon} from 'semantic-ui-react'
import { Button } from 'react-bootstrap';
import './estilos.css'



export default function ItemCount({stock, initial, onAdd}) {
    const [clicks, setClicks] = useState(initial)
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
    function ShowAndHide() {
            return <div className=''>
            <h1 className='cantidad'>Cantidad: </h1>
            <h2 className='numberCount'>{clicks}</h2>
            <div className='buttonGroup'>
                <Button id='button-detail-count' className='button1' variant='primary' onClick={restar}><Icon name='minus'/></Button>
                <Button id='button-detail-count' className='button1' variant='primary' onClick={sumar}><Icon name='plus'/></Button>
                <Button id='button-detail-count' className='button1' onClick={() => {onAdd(clicks)}}>Comprar</Button>   
            </div>
        </div>
    }
    return ShowAndHide()
}

