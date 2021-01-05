import React, {useState} from 'react';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import {Link} from 'react-router-dom';

const ItemDetail = ({item}) => {
    const [compra, setCompra] = useState(null);

    const handleAddProduct = (e, qty) => {
        e.stopPropagation();

        setCompra ({
            cantidad: qty,
            item,
        })
    }

    console.log(compra);

    return (
        <article>
            <div className="itemDetail">
                <h3>{item.title}</h3>
                <p className="itemDetail__serial">S/N {item.id}</p>
                <img src={item.picture} alt="Imagen_producto" className="itemDetail__img" />
                <p>{item.description}</p>
                <p className="itemDetail__precio" >$ {item.price}</p>
                {
                    !compra && <ItemCount stock={10} initial={1} onAdd={handleAddProduct} />
                }
                {
                    compra && <Link to="/carrito">Terminar compra</Link>
                }
            </div>
        </article>
    )
}

export default ItemDetail
