import React from 'react'
import Moes_Bar from './Moes_Bar.jpg';
import './Home.css'

const Home = () => {
    return (
        <>
        <div className="moeBar">
            <img src={Moes_Bar} alt="Bar de Moe" className="moeBar" />
        </div>

        <div className="item__titulo">
            <h1>Nuestros Productos</h1>
        </div>
        </>
    )
}

export default Home
