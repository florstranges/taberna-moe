import React from 'react';
import './Navbar.css';
import Moe from './moe.png';

import CartWidget from '../CartWidget/CartWidget'

let Navbar = () => {
    return (
        <>
            <header className="navbar">
                <div className="logo">
                    <img src={Moe} alt="Moe" className="moe" />
                    <h1>Taberna de Moe</h1>
                </div>
                <div className="nav">
                    <nav>
                        <ul>
                            <li><a href="http://www.google.com.ar">Aperitivos</a></li>
                            <li><a href="http://www.google.com.ar">Cervezas</a></li>
                            <li><a href="http://www.google.com.ar">Espumantes</a></li>
                            <li><a href="http://www.google.com.ar">Licores</a></li>
                            <li><a href="http://www.google.com.ar">Gin</a></li>
                        </ul>
                    </nav>
                    <CartWidget />
                </div>
            </header>
        </>
    );
}

export default Navbar;
