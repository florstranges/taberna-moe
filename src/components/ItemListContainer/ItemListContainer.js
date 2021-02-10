import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { getFirestore } from '../../firebase';


const ItemListContainer = ({category = null}) => {

    let [items, setItems] = useState([]);
    const db = getFirestore()

    useEffect(() => {
        if(!category) {
            db.collection("items")            
                .get()
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
        } else {
            db.collection("items").where('category', '==', category)
                .get()
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
        }
    }, []);


    return (
        <div>
            <ItemList items={items} />

        </div>
    );
}

export default ItemListContainer;