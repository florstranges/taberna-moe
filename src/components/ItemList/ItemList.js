import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { productDetails } from '../Item/Item';
import './ItemList.css';
import ItemCount from '../ItemCount/ItemCount';

const ItemList = () => {

    let stock = 10

    const handleAdd = (contador) => {
        if (contador <= stock) {
            alert(`Agregaste ${contador} items`)
        }}

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
            <div>
                <h1 className="item__titulo">Nuestros Productos</h1>
            </div>
            {product.length === 0 ? <p>Buscando en base de datos...</p> : null}
            { product.map((item) => {
                return (
                    <>
                        <div key={item.id} id="itemContainer" className="itemList">
                            
                            <h3>{item.title}</h3>
                            <Link to={`/itemDetailContainer/${item.id}`}> <img src={item.picture} alt="Imagen_Producto" />
                            </Link>
                            <p>${item.price}</p>

                            <div>
                                <ItemCount initial={1} stock={stock} onAdd={handleAdd} />
                            </div>
                        </div>
                    </>
                )
            })
            }
        </>
    );
}

export default ItemList;
