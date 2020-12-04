import React from 'react';
import './Navbar.css';

let Navbar = () => {
    return (
        <div>
            <header className="navbar">
                <div>
                    <h1>Taverna de Moe</h1>
                </div>
                <nav className="nav">
                    <ul>
                        <li><a href="http://www.google.com.ar">Aperitivos</a></li>
                        <li><a href="http://www.google.com.ar">Cervezas</a></li>
                        <li><a href="http://www.google.com.ar">Espumantes</a></li>
                        <li><a href="http://www.google.com.ar">Licores</a></li>
                        <li><a href="http://www.google.com.ar">Gin</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default Navbar;
