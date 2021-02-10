import React from 'react'
import ItemListContainer from '../ItemListContainer/ItemListContainer'

const Cervezas = () => {

    return (
        <div>
            <h1 className="item__titulo">Cervezas</h1>
            <ItemListContainer category="cerveza" />

        </div>
    )
}

export default Cervezas
