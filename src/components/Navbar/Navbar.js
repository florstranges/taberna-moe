import React from 'react';
import './Navbar.css';
import Moe from './moe.png';

import CartWidget from '../CartWidget/CartWidget';
import {NavLink} from 'react-router-dom';

import {useCartContext} from '../Context/Context';

let Navbar = () => {
    const {cart} = useCartContext();
    
    return (
        <>
            <header className="navbar">
                <div className="logo">
                    <img src={Moe} alt="Moe" className="moe" />
                    <NavLink to='/'>
                        <h1>Taberna de Moe</h1>
                    </NavLink>
                </div>
                <div className="nav">
                    <nav>
                        <NavLink to='/cervezas' className="nav__a" >Cervezas</NavLink>
                        <NavLink to='/vodka' className="nav__a" >Vodka</NavLink>
                        <NavLink to='/carrito' className="nav__a" >Carrito</NavLink>
                    </nav>
                    {
                        !!cart.length && <CartWidget />
                    }
                </div>
            </header>
        </>
    );
}

export default Navbar;
