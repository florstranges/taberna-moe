import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import {useParams} from 'react-router-dom';

const ItemDetailContainer = () => {

    const {id} = useParams();
    const [product, setProduct] = useState([]);

    const arrayProduct = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                id: id,
                title: "Cerveza negra Quilmes Stout 340 Ml porrón retornable",
                description: "Destacada por su cuerpo y espuma cremosa, recuerda al sabor del chocolate y al amargor del café.",
                price: 90,
                picture: "https://www.cdparque.com/img/sections/productos/quilmes_stout.png",
                stock: 50
            })
        }, 2000);
    });

    useEffect(() => {
        arrayProduct
            .then(response => setProduct(response))
            .catch(error => console.log(error));
    }, []);


    return (
        <>
            { product.length === 0 ?
                <p>Cargando producto...</p> :

                <div>
                    <ItemDetail item={product} />
                </div>
            }
        </>
    )
}


export default ItemDetailContainer

