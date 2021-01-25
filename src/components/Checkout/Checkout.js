import { useState, useContext } from 'react';
import { getFirestore } from '../../firebase';
import CartContext from '../Context/Context';
import firebase from 'firebase/app';


const Checkout = () => {
    const [items,setItems] = useState([])
    const [carrito,setCarrito] = useState([])
    const [total,setTotal] = useState(0)
    const [nombre,setNombre] = useState("")
    const [telefono,setTelefono] = useState("")
    const [email,setEmail] = useState("")
    const [compra,setCompra] = useState("")


    const manejarCompra = (e) => {
        e.preventDefault()
        const datosCompra = {
            buyer: {
                name: nombre,
                phone: telefono,
                email: email
            },
            items: [...carrito],
            total: total
        }

        const db = getFirestore()
        const OrderCollection = db.collection("orders")
        OrderCollection.add(datosCompra).then((resultado) => {
            setCompra(resultado.id)

            const Itemscollection = db.collection("items")
            const batch = getFirestore().batch()

            carrito.forEach(item => {
                batch.update(Itemscollection.doc(item.id), { stock: 0 })
            })

            batch.commit()
                .then(() => {
                    console.log("Termino bien")
                })
        })
    }

    
    return (
        <section className="checkout">
            <div className="container">
                <h2>Checkout</h2>

                <form onSubmit={manejarCompra}>
                    <div>
                        <p>Nombre y Apellido:</p>
                        <input value={nombre} onChange={(e) => { setNombre(e.target.value) }} type="text" />
                    </div>
                    <div>
                        <p>Telefono:</p>
                        <input value={telefono} onChange={(e) => { setTelefono(e.target.value) }} type="text" />
                    </div>
                    <div>
                        <p>Correo Electrónico:</p>
                        <input value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" />
                    </div>
                    <button type="submit">Comprar</button>
                </form>
            </div>
        </section>
    )
}

export default Checkout;