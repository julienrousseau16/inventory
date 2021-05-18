import React, { useState, useEffect } from 'react'
import axios from 'axios'

import './Inventory.css'

const Inventory = () => {

    const [item, setItem] = useState('')

    const fetchItem = async () => {
        const result = await axios.get('/items')
        setItem(result.data[3].name)
    }

    useEffect(() => fetchItem(), [])

    return (
        <div className='Inventory'>
            <h3>Contenu de l'inventaire</h3>
            <p>Pour le moment, il y a : {item}</p>
        </div>
    )
}

export default Inventory
