import React from 'react';
import './ItemListContainer.css';
/* import ItemCount from "../ItemCount/ItemCount"; */
import ItemList from '../ItemList/ItemList';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';


function ItemListContainer({ saludo }) {

    /* let stock = 10

    const handleAdd = (contador) => {
        if (contador <= stock) {
            alert(`Agregaste ${contador} items`)
        }
    } */

    return (
        <div>
            <h1 className="saludo">{saludo}</h1>
            <h2 className="itemListC__titulo">Nuestros Productos</h2>

            <ItemList />
            {/* <ItemCount initial={1} stock={stock} onAdd={handleAdd} /> */}
            <h2 className="itemDetail__titulo">Productos Destacados del Mes</h2>
            <ItemDetailContainer />
        </div>
    );
}

export default ItemListContainer;