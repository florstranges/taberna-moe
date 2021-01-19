import React, {useState} from 'react';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import {Link} from 'react-router-dom';
import {useCartContext} from '../Context/Context';

const ItemDetail = ({item}) => {
    const {addToCart} = useCartContext();
    const [showCounter, setShowCounter] = useState(true);

    const handleAddProduct = (e, qty) => {
        e.stopPropagation();

        addToCart({
            cantidad: qty,
            item,
        }, qty)

        setShowCounter(false);
    }

    return (
        <article>
            <div className="itemDetail">
                <h3>{item.title}</h3>
                <p className="itemDetail__serial">S/N {item.category}</p>
                <img src={item.picture} alt="Imagen_producto" className="itemDetail__img" />
                <p>{item.description}</p>
                <p className="itemDetail__precio" >$ {item.price}</p>
                {
                    showCounter && <ItemCount stock={10} initial={1} onAdd={handleAddProduct} />
                }
                {
                    !showCounter && <Link to="/carrito">Terminar compra</Link>
                }
            </div>
        </article>
    )
}

export default ItemDetail
