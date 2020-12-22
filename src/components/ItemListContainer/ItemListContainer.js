import React from 'react';
import './ItemListContainer.css';
import ItemCount from "../ItemCount/ItemCount";
import ItemList from '../ItemList/ItemList';


function ItemListContainer({ saludo }) {

    let stock = 10

    const handleAdd = (contador) => {
        if (contador <= stock) {
            alert(`Agregaste ${contador} items`)
        }
    }

    return (
        <div>
            <h1 className="saludo">{saludo}</h1>

            <ItemList />
            <ItemCount initial={1} stock={stock} onAdd={handleAdd} />
        </div>
    );
}

export default ItemListContainer;