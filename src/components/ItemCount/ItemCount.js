import React, {useState} from 'react';
import './ItemCount.css';

function ItemCount({ stock, initial, onAdd }) {
    
    const [contador, setContador] = useState(initial);
    
    const agregar = () => {
        if (contador >= initial && contador < stock) {
            setContador(contador + 1);
        }
    }
    const quitar = () => {
        if (contador > initial) {
            setContador(contador - 1);
        }
    }


    return (
        <>
            <div className="producto">
                <p>Cantidad: {contador} </p>
                <button onClick={quitar} className="botonAccion">-</button>
                <button onClick={agregar} className="botonAccion">+</button>
                <button  onClick={(e) => onAdd(e, contador)} className="agregar">Agregar al carrito</button>
            </div>
        </>
    );
}

export default ItemCount;