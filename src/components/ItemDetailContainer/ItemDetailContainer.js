import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';


const ItemDetailContainer = (props) => {

    const [product, setProduct] = useState([]);

    const arrayProduct = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                id: 3,
                title: "Cerveza Quilmes Stout",
                description: "Negra",
                price: 110,
                picture: "https://www.cdparque.com/img/sections/productos/quilmes_stout.png"
            })
        }, 2000);
    });

    useEffect (() => {
        arrayProduct
        .then(response => setProduct(response))
        .catch(error => console.log(error));
    }, []);


    return(
        <>
        { product.length === 0 ?
            <p>Cargando producto...</p>:

            <div>
                <ItemDetail item={product} />
            </div> 
        }
        </>
    )
    }


export default ItemDetailContainer

