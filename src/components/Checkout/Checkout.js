import { useState, useContext } from 'react';
import { getFirestore } from '../../firebase';
import {useCartContext} from '../../components/Context/Context';
import './Checkout.css'


const Checkout = () => {
    const [carrito,setCarrito] = useState([])
    const [total,setTotal] = useState("")
    const [nombre,setNombre] = useState("")
    const [telefono,setTelefono] = useState("")
    const [email,setEmail] = useState("")
    const [compra,setCompra] = useState("")
    const {cart} = useCartContext();


    const manejarCompra = (e) => {
        e.preventDefault()
        const datosCompra = {
            buyer: {
                name: nombre,
                phone: telefono,
                email: email
            },
            items: cart,
            total: total
        }

        const db = getFirestore()
        const OrderCollection = db.collection("orders")
        OrderCollection.add(datosCompra)
        .then((resultado) => {
            setCompra(resultado.id)

            const Itemscollection = db.collection("items")
            const batch = getFirestore().batch()

            carrito.forEach(item => {
                batch.update(Itemscollection.doc(item.id), { stock: 0 })
            })

            batch.commit()
                .then(() => {
                    alert("Gracias por tu compra")
                })
        })

        console.log(datosCompra);
    }

    
    return (
        <section className="checkout">
            <div className="container">
                <h1>Checkout</h1>

                <form onSubmit={manejarCompra} className="formCheckout">
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