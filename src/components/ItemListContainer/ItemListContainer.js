import React from 'react';
import './ItemListContainer.css';
/* import ItemCount from "../ItemCount/ItemCount"; */
import ItemList from '../ItemList/ItemList';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';


function ItemListContainer({ saludo }) {


    return (
        <div>
            <ItemList />
            
        </div>
    );
}

export default ItemListContainer;