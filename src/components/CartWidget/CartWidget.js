import React, {useState} from 'react';
import './CartWidget.css';
import CarritoBirra from './birra.png';
import {useCartContext} from '../Context/Context';

export default function CartWidget() {
    const { cart, totalQty, removeItem } = useCartContext();
    const [show, setShow] = useState(false);

    return (
        <div >
            <div className="cerveCarrito" onClick={() => setShow(true)}>
                <img src={CarritoBirra} alt="Carrito Birra" className="CarritoBirra" />
                <div className="cerveCarritoFondo">
                    <p>{totalQty}</p>
                </div>
            </div>
            {
                show &&
                <div className="cerveCarritoOpen">
                    {cart.map((product, index) => {
                        return (
                            <div key={index} className="cartDetail">
                                <p><strong>{product.item.title}</strong></p>
                                <p>Cantidad: {product.cantidad}</p>
                                <p>Precio por unidad: {product.item.price}</p>
                                <p>Precio total: {product.item.price * product.cantidad}</p>
                                <button onClick={() => removeItem(product.item.id, product.item.price * product.cantidad, product.cantidad)}>Eliminar item</button>
                                
                            </div>
                        )
                    })}
                    <button onClick={() => setShow(false)}>Cerrar</button>
                </div>
            }
        </div>
    );
}