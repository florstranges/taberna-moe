import React from 'react'
import {Link} from 'react-router-dom';
import {useCartContext} from '../../components/Context/Context';
import './Carrito.css'

const Carrito = () => {
    const {cart, totalPrice, removeItem, clearCart} = useCartContext();

    return (
        <div className="carrito">
            <h1>Carrito</h1>
            {
                cart.length > 0 ?
                <div className="carritoContenedor">
                    {cart.map((product, index) => {
                        return (
                            <div key={index} className="cartDetail">
                                <p><strong>{product.item.title}</strong></p>
                                <p>Cantidad: {product.cantidad}</p>
                                <p>Precio por unidad: ${product.item.price}</p>
                                <p>Precio total: ${product.item.price * product.cantidad}</p>
                                <button onClick={() => removeItem(product.item.id, product.item.price * product.cantidad, product.cantidad)}>Eliminar item</button>
                            </div>
                        )
                    })}
                    <p><strong>Precio total: ${totalPrice}</strong></p>
                    {cart.length > 0 && <button className="carrito_vacio" onClick={clearCart}>Vaciar carrito</button>}
                    <Link to="/checkout" className="carrito_final">Terminar compra</Link>
                </div> :
                <>
                    <div className="carritoVacioMensaje">
                        <p>El carrito está vacío</p>
                        <Link to="/" className="carritoVacioBoton">Volver al inicio</Link>
                    </div>
                </>
            }
        </div>
    )
}

export default Carrito