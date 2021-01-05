import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import {useParams} from 'react-router-dom';

const productDetails = [
    {
        category: "0001",
        id: "001",
        title: "Cerveza Rubia Corona 330 Ml Porrón Descartable",
        description: "Corona es una cerveza premium, clásica y auténtica, reconocida mundialmente por su alta calidad, su sabor distintivo e imagen.",
        price: 100,
        picture: "https://www.cdparque.com/img/sections/productos/corona.png",
        stock: 10
    },
    {
        category: "0002",
        id: "002" ,
        title: "Cerveza Rubia Stella Artois 975 Ml Botella Retornable",
        description: "La cerveza belga número 1 en ventas a nivel mundial.",
        price: 160,
        picture: "https://www.laconstancia.com/system/balloom/asset/pictures/attachments/000/001/150/original/01-stella.png",
        stock: 20
    },
    {
        category: "0003",
        id: "003" ,
        title: "Cerveza negra Quilmes Stout 340 Ml porrón retornable",
        description: "Destacada por su cuerpo y espuma cremosa, recuerda al sabor del chocolate y al amargor del café.",
        price: 90,
        picture: "https://www.cdparque.com/img/sections/productos/quilmes_stout.png",
        stock: 50
    },
    {
        category: "0004",
        id: "004",
        title: "Cerveza Brahma Chopp 1 L botella retornable",
        description: "Brahma nació en Brasil en 1888 como una cerveza de rico sabor con cuerpo suave y refrescante.",
        price: 120,
        picture: "https://www.cdparque.com/img/sections/productos/brahma.png",
        stock: 70
    },
    {
        category: "0005",
        id: "005",
        title: "Cerveza Heineken Premiun Retornable 1 L",
        description: "Heineken es la cerveza Premium número 1 de Europa y la más internacional del mundo",
        price: 200,
        picture: "https://www.heineken.com/media-us/01pfxdqq/heineken-original-bottle.png?quality=85",
        stock: 100
    },
    {
        category: "0006",
        id: "006",
        title: "Cerveza Antares Scotch",
        description: "Rubí, Maltosa, Fácil de tomar",
        price: 150,
        picture: "https://manyando.files.wordpress.com/2014/10/cerveza-artesanal-antares-kolsch-scotch-porter-cajax12x500cc-19165-mla20167387464_092014-f.png",
        stock: 100
    }
]

const ItemDetailContainer = () => {

    const [item, setItem] = useState();
    const {id} = useParams();

    useEffect(()=>{

        let promise = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(productDetails)
            },2000)
        })

        promise
        .then(resolve=>{
            if(id){
                setItem(resolve.filter(item=>item.id===id)[0])
            }
        })
        .catch(reject=>{
            console.log(reject)
        })

    },[id])

    return (
        <>
            <div>
            {item
            ? <ItemDetail item={item}/> 
            : <p>Buscando producto...</p>}
            </div>
        </>
    )
}

export default ItemDetailContainer

