import React from 'react';
import './CartWidget.css';
import CarritoBirra from './birra.png';

export default function CartWidget() {
    return (
        <div>
            <img src={CarritoBirra} alt="Carrito Birra" className="CarritoBirra" />
        </div>
    );
}