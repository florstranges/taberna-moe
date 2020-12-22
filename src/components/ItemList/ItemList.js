import React, { useState, useEffect }  from 'react';
import products from '../Item/Item'

const ItemList = () => {
    let [products, setItem] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            const promise = new Promise((resolve, reject) => {
                resolve(products);
            });
            promise.then(products => {
                setItem(products);
            })
        }, 3000)
    }, [])
    return (
        <>
            {products.map((item) => {
                return (
                    <div key={item.id}>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <p>{item.price}</p>
                    </div>
                )
            })
            }
        </>
    );
}

export default ItemList;
