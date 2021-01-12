import React from 'react'
import {useCartContext} from '../../components/Context/Context';
import './Carrito.css'

const Carrito = () => {
    const {cart, totalQty, removeItem, clearCart} = useCartContext();
    console.log(totalQty);
    return (
        <div className="carrito">
            <h1>Carrito</h1>
            {
                cart.map(product => (
                    <div className="cartDetail">
                        <p><strong>{product.item.title}</strong></p>
                        <p>Cantidad: {product.cantidad}</p>
                        <p>Precio por unidad: {product.item.price}</p>
                        <p>Precio total: {product.item.price * product.cantidad}</p>
                        <button onClick={() => removeItem(product.item.id)}>Eliminar item</button>
                        <hr />
                    </div>
                ))
            }
            {
                cart.length > 0 && <button className="carrito_vacio" onClick={clearCart}>Vaciar carrito</button>
            }
        </div>
    )
}

export default Carrito