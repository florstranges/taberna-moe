import React, { useState, useEffect } from 'react';
import { productDetails } from '../Item/Item';
import './ItemList.css';

const ItemList = () => {
    let [product, setItem] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            const promise = new Promise((resolve, reject) => {
                resolve(productDetails);
            });
            promise.then(productDetails => {
                setItem(productDetails);
            })
        }, 3000)
    }, [])
    return (
        <>
            {product.length === 0 ? <p>Buscando en base de datos...</p> : null}
            { product.map((item) => {
                return (
                    <>
                        <div className="itemList">
                            <h2>{item.title}</h2>
                            <img scr={item.pictureUrl} alt="Imagen Producto" />
                            <p>{item.description}</p>
                            <p>${item.price}</p>
                        </div>
                    </>
                )
            })
            }
        </>
    );
}

export default ItemList;
