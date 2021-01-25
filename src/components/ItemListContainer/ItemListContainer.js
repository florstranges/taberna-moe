import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../firebase';


const ItemListContainer = () => {

    let [items, setItems] = useState([]);
    const { id } = useParams()

    console.log(items);

    useEffect(() => {
        const db = getFirestore()
        const itemsColecction = db.collection("items")

        itemsColecction.get("category", "==", 1)
        
            .then(docs => {
                let arr = [];
                docs.forEach(doc => {
                    arr.push({id:doc.id, data:doc.data()})
                })

                setItems(arr);
            })
            .catch((err) => {
                console.log(err)
            })

    }, []);


    return (
        <div>
            <ItemList items={items} />

        </div>
    );
}

export default ItemListContainer;