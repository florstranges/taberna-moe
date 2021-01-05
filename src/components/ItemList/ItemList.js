import React from 'react';
import Item from '../Item/Item';
import './ItemList.css';


const ItemList = ({items}) => {

    return (
        <>
        <div className="item__titulo">
            <h1>Nuestros Productos</h1>
        </div>
        <div className="bloque">
            {items.length > 0
            ? items.map(item=>{
                return (
                    <div  className="itemList"> 
                    <Item key={item.id} id={item.id} title={item.title} price={item.price} picture={item.picture}/>
                    </div>
                )
            })
            : <p>Buscando Productos..</p>}
        </div>
        </>
    )
}

export default ItemList
