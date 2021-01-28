import { useState } from 'react';
import { getFirestore } from '../../firebase';
import { useCartContext } from '../../components/Context/Context';
import './Checkout.css'


const Checkout = () => {
    const {totalPrice} = useCartContext()
    const [nombre, setNombre] = useState("")
    const [telefono, setTelefono] = useState("")
    const [email, setEmail] = useState("")
    const { cart } = useCartContext();
    const [orderId, setOrderId] = useState();


    const manejarCompra = (e) => {
        e.preventDefault()
        const datosCompra = {
            buyer: {
                name: nombre,
                phone: telefono,
                email: email
            },
            items: cart,
            total: totalPrice
        }

        const db = getFirestore()
        const OrderCollection = db.collection("orders")
        OrderCollection
            .add(datosCompra)
            .then(({ id }) => {
                setOrderId(id);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                alert("Compra realizada con éxito");
                console.log(orderId);
            });
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