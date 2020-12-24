import React from 'react';
import './ItemDetail.css';

const ItemDetail = ({item}) => {
    
    return (
        <article>
            <div className="itemDetail">
                <h3>{item.title}</h3>
                <p className="itemDetail__serial">S/N {item.id}</p>
                <img src={item.picture} alt="Imagen_producto" className="itemDetail__img" />
                <p className="itemDetail__precio" >$ {item.price}</p>
                <button className="agregar">Agregar al carrito</button>
            </div>
        </article>
    )
}

export default ItemDetail
