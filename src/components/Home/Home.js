import React from 'react';
import './Home.css';
import ItemListContainer from '../ItemListContainer/ItemListContainer';


function Home(){
    return(
        <main className="home">
        <ItemListContainer saludo="¡Bienvenido a mi Taberna!" />
        </main>
    );
}

export default Home;