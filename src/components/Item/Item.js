import React from 'react'
import { NavLink } from 'react-router-dom'
import './Item.css'

const Item = ({id,title,price,picture}) => {
    return (
        <div>
            <div>
                <div>
                    <img src={picture} alt={`title-id`}/>
                </div>
                <div>
                    <hr></hr>
                    <span>{title}</span>
                    <hr></hr>
                    <p className="price">${price}</p>
                </div>
                <div className="item__detalle">
                    <NavLink to={`/item/${id}`} >Ver Detalle</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Item

