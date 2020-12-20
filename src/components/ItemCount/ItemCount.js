import React, {useState} from 'react';
import './ItemCount.css';
import Corona from './corona.png';

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
                <img src={Corona} alt="Corona" className="Corona" />
                <h2>Cerveza Corona</h2>
                <p>Cantidad: {contador} </p>
                <button onClick={agregar} className="botonAccion">+</button>
                <button onClick={quitar} className="botonAccion">-</button>
                <button  onClick={() => onAdd(contador)} className="agregar">Agregar al carrito</button>
            </div>
        </>
    );
}

export default ItemCount;