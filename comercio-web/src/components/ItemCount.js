import React, {useEffect, useState} from 'react'
import {Icon} from 'semantic-ui-react'
import { Button } from 'react-bootstrap';


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
    return <div>
        <h1>{clicks}</h1>
        <Button  variant='primary' onClick={restar}><Icon name='minus'/></Button>
        <Button variant='primary' onClick={sumar}><Icon name='plus'/></Button>
        <Button onClick={() => {onAdd(clicks)}}>Comprar</Button>
    </div>
}
