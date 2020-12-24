import React, { useState, useEffect } from 'react';
import { productDetails } from '../Item/Item';
import ItemDetail from '../ItemDetail/ItemDetail';


const ItemDetailContainer = (props) => {

    const [product, setProduct] = useState([]);

    useEffect(() => {
        const arrayDatos = fetch (productDetails)
        arrayDatos.then ((resultado) => {
            if (resultado.status === 200 ){
                return resultado.json();
            }
        })
        .then ((resultado) => {
            setTimeout(() => {
                setProduct(resultado)
            }, 2000);
        })
        
    }, [])

    return (
        <>
            {product.map((e) => {
                return(
                    <ItemDetail
                        title={product.title}
                        picture={product.picture}
                        price={product.price}
                    />
                )
            })
            }
        
        </>
    )
}

export default ItemDetailContainer

