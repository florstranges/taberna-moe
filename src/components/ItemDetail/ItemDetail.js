import React from 'react';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({item}) => {
    
    return (
        <article>
            <div className="itemDetail">
                <h3>{item.title}</h3>
                <p className="itemDetail__serial">S/N {item.id}</p>
                <img src={item.picture} alt="Imagen_producto" className="itemDetail__img" />
                <p>{item.description}</p>
                <p className="itemDetail__precio" >$ {item.price}</p>
                <ItemCount stock={10} initial={1}/>
            </div>
        </article>
    )
}

export default ItemDetail
