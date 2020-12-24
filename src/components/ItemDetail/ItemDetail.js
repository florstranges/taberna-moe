import React from 'react';

const ItemDetail = ({title, picture, price}) => {
    
    return (
        <>
            <h5>Nombre: {title}</h5>
            <img src={picture} alt="Imagen_producto" />
            <p>Precio: $ {price}</p>
        </>
    )
}

export default ItemDetail
